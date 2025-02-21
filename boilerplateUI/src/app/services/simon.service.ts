import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimonService {
  http = inject(HttpClient);
  private url = `http://localhost:8080`;

  sayHello() {
    //return "Hello World!";
    return this.http.get(this.url + `/hello`, { responseType: 'text'});
  }

  saySimonLocal(simonInput: string) {
    const simonMessage = "Simon says: " + simonInput;
    return { message: simonMessage};
  }

  saySimon(simonInput: string) {
    const requstBody = { simon: simonInput};
    return this.http.put(this.url + `/simon`, requstBody);
  }
}
