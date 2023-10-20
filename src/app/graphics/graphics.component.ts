import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})

export class GraphicsComponent implements OnInit {
  @Input()
  currency: string = "USD"

  data = {
    datasets: [{
      data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 10 }, { x: '2017-12-26', y: 240 }]
    }]
  }

  ngOnInit() {
    //data = graphsservice
    this.createChart()
  };

  createChart() {
    const canvas = document.getElementById('exchangeRateChart') as HTMLCanvasElement;

    const chart = new Chart(canvas, {
      type: 'line',
      data: this.data,
      options: {}
    });
  }
}
