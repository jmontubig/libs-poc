import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor() { }

  test() {
    console.log('From Lib 1');
  }
}
