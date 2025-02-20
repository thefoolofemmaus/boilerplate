import { Component, inject } from '@angular/core';
import { SimonService } from '../../services/simon.service';

@Component({
  selector: 'app-apicallpage',
  templateUrl: './apicallpage.component.html',
  styleUrl: './apicallpage.component.scss',
  standalone: false
})
export class ApicallpageComponent {
  simonService = inject(SimonService);
  simonMessage = '';

  sayHello() {
    this.simonMessage = this.simonService.sayHello();
  }

  clearMessage() {
    this.simonMessage = '';
  }
}
