// ARQUIVO: src/app/pages/history/history.page.ts

import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service'; // Ajuste o caminho para 'services'
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Importe CommonModule
import { FormsModule } from '@angular/forms'; // Importe FormsModule

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true, // Adicione Standalone
  imports: [IonicModule, CommonModule, FormsModule], // Adicione Imports
})
export class HistoryPage {
  history: any[] = [];

  constructor(
    private storage: StorageService,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.loadHistory();
  }

  async loadHistory() {
    this.history = (await this.storage.get<any[]>('history')) || [];
  }

  async clearHistory() {
    const alert = await this.alertCtrl.create({
      header: 'Limpar Histórico?',
      message: 'Isso apagará todos os registros. Esta ação não pode ser desfeita.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Limpar',
          role: 'destructive',
          handler: async () => {
            await this.storage.remove('history');
            this.history = [];
          },
        },
      ],
    });
    await alert.present();
  }
}