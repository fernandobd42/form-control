import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { GoogleSearchComponent } from './google-search/google-search.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDx9CQT8A1JGzsUDTtUgUi_q7lvz1CbK8s',
      libraries: ['geometry', 'places']
    })
  ],
  providers: [],
  declarations: [ AppComponent, GoogleSearchComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}