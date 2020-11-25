import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared-components/header/header.module';
import { FooterModule } from './shared-components/footer/footer.module';
import { PopupModule } from './shared-components/popup/popup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }