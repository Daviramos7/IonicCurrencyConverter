// ARQUIVO: src/app/pages/settings/settings.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page'; // Importe a página

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    SettingsPage, // <-- Adicione a página aqui
  ],
  declarations: [], // <-- Deixe este array VAZIO
})
export class SettingsPageModule {}