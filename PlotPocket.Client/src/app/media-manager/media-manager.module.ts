import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaManagerRoutingModule } from './media-manager-routing.module';
import { TrendingListComponent } from './components/trending-list/trending-list.component';


@NgModule({
  declarations: [
    TrendingListComponent
  ],
  imports: [
    CommonModule,
    MediaManagerRoutingModule
  ]
})
export class MediaManagerModule { }
