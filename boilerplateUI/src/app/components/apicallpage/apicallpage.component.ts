import { Component, inject } from '@angular/core';
import { SimonService } from '../../services/simon.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-apicallpage',
  templateUrl: './apicallpage.component.html',
  styleUrl: './apicallpage.component.scss',
  standalone: false
})
export class ApicallpageComponent {
  simonService = inject(SimonService);
  simonMessage = '';
  simonInput = 'have simon say something';

  sayHello() {
    //this.simonMessage = this.simonService.sayHello();
    this.simonService.sayHello()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }))
        .subscribe(
          (returnString: string) => {
            this.simonMessage = returnString;
          }
        );
  }

  clearMessage() {
    this.simonMessage = '';
  }

  saySimon() {
    //this.simonMessage = this.simonService.saySimonLocal(this.simonInput).message;
    this.simonService.saySimon(this.simonInput)
      .pipe(
        catchError(
          (err) => {
            console.log(err);
            throw err;
          }
        )
      )
      .subscribe(
        (simonReturn) => {
          this.simonMessage = simonReturn.message;
        }
      )
  }
}
