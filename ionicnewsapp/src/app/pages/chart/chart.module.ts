// ARQUIVO: src/app/pages/chart/chart.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartPageRoutingModule } from './chart-routing.module';

import { ChartPage } from './chart.page'; // Importe a página

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPageRoutingModule,
    ChartPage, // <-- Adicione a página aqui
  ],
  declarations: [], // <-- Deixe este array VAZIO
})
export class ChartPageModule {}