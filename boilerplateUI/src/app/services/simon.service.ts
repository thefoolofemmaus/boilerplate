import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimonService {

  sayHello() {
    return "Hello World!";
  }

  saySimon(simonInput: string) {
    const simonMessage = "Simon says: " + simonInput;
    return { message: simonMessage};
  }
}
