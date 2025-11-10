// ARQUIVO: src/app/services/storage.service.ts

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const s = await this.storage.create();
    this._storage = s;
  }

  async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  async get<T>(key: string): Promise<T | null> {
    return (await this._storage?.get(key)) ?? null;
  }

  async remove(key: string) {
    await this._storage?.remove(key);
  }

  async clear() {
    await this._storage?.clear();
  }
}