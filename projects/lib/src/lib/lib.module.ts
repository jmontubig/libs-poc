import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { LibHighlightDirective } from './directives/lib-highlight.directive';



@NgModule({
  declarations: [LibComponent, LibHighlightDirective],
  imports: [
  ],
  exports: [LibComponent, LibHighlightDirective]
})
export class LibModule { }
