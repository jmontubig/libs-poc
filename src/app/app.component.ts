import { Component } from '@angular/core';
import { Lib2Service } from 'projects/lib2/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libs-poc';
  constructor(private s: Lib2Service) {
    this.s.displayLog();
  }
}
