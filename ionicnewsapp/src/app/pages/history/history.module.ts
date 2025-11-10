// ARQUIVO: src/app/pages/history/history.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page'; // Importe a página

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    HistoryPage, // <-- Adicione a página aqui
  ],
  declarations: [], // <-- Deixe este array VAZIO
})
export class HistoryPageModule {}