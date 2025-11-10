// ARQUIVO: src/app/services/network.service.ts

import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  public status$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.init();
  }

  async init() {
    const status = await Network.getStatus();
    this.status$.next(status.connected);

    Network.addListener('networkStatusChange', (s) => {
      this.status$.next(s.connected);
    });
  }
}