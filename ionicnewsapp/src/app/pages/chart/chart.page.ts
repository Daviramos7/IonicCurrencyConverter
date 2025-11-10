// ARQUIVO: src/app/pages/chart/chart.page.ts

import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ChartConfiguration } from 'chart.js';
import { IonicModule } from '@ionic/angular'; // Importe IonicModule
import { CommonModule } from '@angular/common'; // Importe CommonModule
import { FormsModule } from '@angular/forms'; // Importe FormsModule

// CORREÇÃO: Importe o BaseChartDirective
import { BaseChartDirective } from 'ng2-charts'; 

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
  standalone: true, 
  // CORREÇÃO: Use o BaseChartDirective aqui
  imports: [IonicModule, CommonModule, FormsModule, BaseChartDirective], 
})
export class ChartPage {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Taxa de Câmbio',
        fill: true,
        tension: 0.3,
        borderColor: 'rgba(64,81,181,1)',
        backgroundColor: 'rgba(64,81,181,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true
  };

  constructor(private storage: StorageService) { }

  ionViewWillEnter() {
    this.loadChartData();
  }

  async loadChartData() {
    const history = (await this.storage.get<any[]>('history')) || [];
    const recentHistory = history.slice(0, 15).reverse();

    if (recentHistory.length > 1) {
      const labels = recentHistory.map(item => new Date(item.timestamp).toLocaleTimeString());
      const data = recentHistory.map(item => item.rate);
      const pair = `${recentHistory[0].from}/${recentHistory[0].to}`;
      
      this.lineChartData.datasets[0].label = `Taxa (${pair})`;
      this.lineChartData.labels = labels;
      this.lineChartData.datasets[0].data = data;
    }
  }
}