import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import * as $ from 'jquery';

import { TruncatePipe } from './limit-to.pipe';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { HomeComponent } from './home.component';
import { DiscoverComponent } from './discover.component';

import { NewsService } from './news.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    DiscoverComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
