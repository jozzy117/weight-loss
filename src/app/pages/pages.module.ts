import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddWeightComponent } from './add-weight/add-weight.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgChartsModule } from 'ng2-charts';

export const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'add-weight', component: AddWeightComponent, pathMatch: 'full'},
  {path: 'history', component: HistoryComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    HomeComponent,
    AddWeightComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgChartsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
