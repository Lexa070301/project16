import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './main/main.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxMaskModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
