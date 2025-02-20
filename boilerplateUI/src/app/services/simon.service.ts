import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimonService {

  sayHello() {
    return "Hello World!";
  }
}
