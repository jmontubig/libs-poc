import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lib2Module} from 'lib2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
