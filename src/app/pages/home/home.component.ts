import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activities = [
    { img:'assets/images/time.PNG', qty: 27, title: "Left today", progress: 'progress-bar w-50' },
    { img:'assets/images/burn.PNG', qty: 866, title: "Calories burn", progress: 'progress-bar w-60' },
    { img:'assets/images/footstep.PNG', qty: 7579, title: "Steps", progress: 'progress-bar w-80' },
  ];
  activityConfig = { "slidesToShow": 2, "slidesToScroll": 1, "autoplay": true, "dots": false, };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 't', 'w', 't', 'f', 's', 's', 'm' ],
    datasets: [
      { data: [ 10, 10, 5, 8, 9, 4, 6 ], 
        label: 'Series A',
        borderColor: '#C2FF4D',
        backgroundColor: ['#C2FF4D','#C2FF4D','#BDB3FF','#BDB3FF','#C2FF4D','#BDB3FF','#BDB3FF'],
        borderRadius: 20,
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      y: {
        ticks: { color: 'white'}
      },
      x: {
        ticks: { color: 'white' }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
