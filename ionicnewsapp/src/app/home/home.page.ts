// ARQUIVO: src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular'; // Importe o IonicModule
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { ExchangeService, MappedRatesResponse } from '../services/exchange.service'; // Importe o TIPO CORRIGIDO
import { StorageService } from '../services/storage.service';
import { NetworkService } from '../services/network.service';
import { RouterLink } from '@angular/router'; // <-- IMPORTANTE PARA OS BOTÕES

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, 
  imports: [IonicModule, CommonModule, FormsModule, RouterLink], // <-- ADICIONE RouterLink
})
export class HomePage implements OnInit {
  currencies: string[] = [];
  from = 'USD';
  to = 'BRL';
  amount = 1;
  result: number | null = null;
  rate: number | null = null;
  offline = false;
  loading = false;

  constructor(
    private ex: ExchangeService,
    private storage: StorageService,
    private net: NetworkService,
    private toastCtrl: ToastController
  ) {}

  async ngOnInit() {
    this.net.status$.subscribe((connected) => (this.offline = !connected));
    await this.loadCurrencies();
    this.convert(); // Converte ao carregar
  }

  async loadCurrencies() {
    this.loading = true;
    try {
      // Tenta buscar da API, se falhar, usa o cache
      const resp = await this.ex.fetchLatest('USD');
      // Correção: usa os campos 'rates' e 'base' do MappedRatesResponse
      this.currencies = Object.keys(resp.rates).concat(resp.base).sort();
    } catch (err) {
      // Se API falhar, tenta pegar do cache
      const cached = await this.ex.getCached();
      if (cached) {
        this.currencies = Object.keys(cached.rates).concat(cached.base).sort();
      } else {
        // Fallback se não tiver nada
        this.currencies = ['USD', 'EUR', 'BRL', 'JPY'];
        this.presentToast('Erro ao carregar moedas.', 'danger');
      }
    }
    this.loading = false;
  }

  async convert() {
    if (this.loading || !this.from || !this.to) return;
    this.loading = true;

    try {
      const { rate, result } = await this.ex.convert(
        this.amount,
        this.from,
        this.to
      );
      this.rate = rate;
      this.result = result;

      // Salva no histórico
      const history = (await this.storage.get<any[]>('history')) || [];
      history.unshift({
        timestamp: new Date().toISOString(),
        from: this.from,
        to: this.to,
        amount: this.amount,
        result,
        rate,
      });
      // Mantém apenas os últimos 50 registros
      await this.storage.set('history', history.slice(0, 50));
    } catch (err: any) {
      this.presentToast(err.message || 'Erro ao converter.', 'danger');
    }
    this.loading = false;
  }

  invert() {
    const tmp = this.from;
    this.from = this.to;
    this.to = tmp;
    this.convert();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
    });
    toast.present();
  }
}