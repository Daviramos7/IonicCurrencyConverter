// ARQUIVO: src/app/home/home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page'; // <-- Importe a página
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomePage, // <-- IMPORTE a página aqui
  ],
  declarations: [], // <-- DEIXE VAZIO
})
export class HomePageModule {}