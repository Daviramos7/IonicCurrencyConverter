// ARQUIVO: src/app/services/exchange.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

// TIPO 1: A Resposta REAL da API
export interface ApiRatesResponse {
  base_code: string;
  time_last_update_utc: string;
  conversion_rates: { [code: string]: number };
}

// TIPO 2: A Resposta MAPEADA que meu App usa
export interface MappedRatesResponse {
  base: string;
  date: string;
  rates: { [code: string]: number };
}

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private cacheKey = 'latest_rates';
  private cacheMetaKey = 'latest_rates_meta';

  constructor(private http: HttpClient, private storage: StorageService) {}

  // Busca as taxas mais recentes da API
  async fetchLatest(base = 'USD'): Promise<MappedRatesResponse> {
    const apiKey = environment.EXCHANGE_API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`;

    try {
      // Pega a resposta REAL da API
      const resp = await firstValueFrom(this.http.get<ApiRatesResponse>(url));

      // Mapeia para o TIPO 2 (que meu app entende)
      const mappedResp: MappedRatesResponse = {
        base: resp.base_code,
        date: resp.time_last_update_utc,
        rates: resp.conversion_rates,
      };

      await this.storage.set(this.cacheKey, mappedResp);
      await this.storage.set(this.cacheMetaKey, {
        base: mappedResp.base,
        date: mappedResp.date,
        fetchedAt: Date.now(),
      });
      return mappedResp;
    } catch (err) {
      // Se falhar (offline), tenta devolver o cache (que é do TIPO 2)
      const cached = await this.storage.get<MappedRatesResponse>(this.cacheKey);
      if (cached) return cached;
      throw err;
    }
  }

  // Calcula a taxa entre duas moedas
  computeRate(ratesResp: MappedRatesResponse, from: string, to: string): number {
    if (from === ratesResp.base) {
      return ratesResp.rates[to];
    }
    const rateFromToBase = 1 / ratesResp.rates[from];
    return rateFromToBase * ratesResp.rates[to];
  }

  // Converte o valor
  async convert(
    value: number,
    from: string,
    to: string
  ): Promise<{ rate: number; result: number; source: MappedRatesResponse }> {
    try {
      // Tenta buscar com a moeda 'from' como base para cálculo simples
      const resp = await this.fetchLatest(from); // Já é MappedRatesResponse
      const rate = resp.rates[to]; // Agora 'rates' existe
      return { rate, result: value * rate, source: resp };
    } catch {
      // Se falhar, usa o cache
      const cached = await this.storage.get<MappedRatesResponse>(this.cacheKey);
      if (!cached)
        throw new Error('Sem taxas disponíveis (offline e sem cache).');

      const rate = this.computeRate(cached, from, to);
      return { rate, result: value * rate, source: cached };
    }
  }

  async getCached(): Promise<MappedRatesResponse | null> {
    return this.storage.get<MappedRatesResponse>(this.cacheKey);
  }
}