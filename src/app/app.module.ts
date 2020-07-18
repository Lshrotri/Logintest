import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCreateComponent } from './pages/hero-create/hero-create.component';
import { HeroEditComponent } from './pages/hero-edit/hero-edit.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './pages/heroes-detail/heroes-detail.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroCreateComponent,
    HeroEditComponent,
    HeroesListComponent,
    HeroesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
