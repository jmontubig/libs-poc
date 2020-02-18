import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib2',
  template: `
    <h1>
      lib2 works!
    </h1>
    <p><lib-lib></lib-lib></p>
    <p>I am at the lib2module and there are nothing <span [libHighlight]="color">unusual</span> in this paragraph, right?</p>
  `,
  styles: []
})
export class Lib2Component implements OnInit {

  constructor() { }
  color = 'yellow';
  ngOnInit(): void {
  }

}
