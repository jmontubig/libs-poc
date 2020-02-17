import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import { LibModule } from 'lib';


@NgModule({
  declarations: [Lib2Component],
  imports: [
    LibModule
  ],
  exports: [Lib2Component]
})
export class Lib2Module { }
