import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  deactivationCode!: FormControl;
  codiceGiusto: String = 'test';

  constructor() {
    this.deactivationCode = new FormControl('');
  }

  remaining: number = 3;

  confirmCode() {
    console.log('test', this.deactivationCode.value);
    if (this.deactivationCode.value === this.codiceGiusto) {
      console.log('OK');
      return true;
    } else {
      this.remaining -= 1;
      return false;
    }
  }
}
