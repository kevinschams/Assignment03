import { Component, Input, OnInit, inject } from '@angular/core';
import { TrendingService } from '../../services/trending.service';
import { Show } from '../../models/show';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-card',
  templateUrl: './app-show-card.component.html',
  styleUrl: './app-show-card.component.css'
})
export class AppShowCardComponent{

@Input() show: Show | undefined;


  
}
