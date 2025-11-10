// ARQUIVO: src/app/pages/settings/settings.page.ts

import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { IonicModule } from '@ionic/angular'; // Importe IonicModule
import { CommonModule } from '@angular/common'; // Importe CommonModule
import { FormsModule } from '@angular/forms'; // Importe FormsModule

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true, // Adicione Standalone
  imports: [IonicModule, CommonModule, FormsModule], // Adicione Imports
})
export class SettingsPage implements OnInit {
  
  updateFrequency = 'on_open';
  private settingsKey = 'app_settings';

  constructor(private storage: StorageService) { }

  async ngOnInit() {
    const settings = await this.storage.get<any>(this.settingsKey);
    if (settings && settings.frequency) {
      this.updateFrequency = settings.frequency;
    }
  }

  saveSettings() {
    this.storage.set(this.settingsKey, {
      frequency: this.updateFrequency
    });
  }
}