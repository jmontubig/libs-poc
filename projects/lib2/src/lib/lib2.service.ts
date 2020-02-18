import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lib2Service {

  constructor() { }

  displayLog() {
    console.log('I am from lib2!!');
  }
}
