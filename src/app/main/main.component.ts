import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  deactivationCode!: FormControl;
  codiceGiusto: String =
    'JqDeCP8+qgoaclWyCTflcw==zFmzHg7hq68WKDrrA4B+vw==eB0/HxIYvae1LxIDezYBw==';
  resetTries: String =
    'KaUU/HKK8JnDccwiCVWpXA==+heQ70A4U/vBh+gSYGR3jvw==Zd3h9l3ExMZjkXlL9hWvRA==';
  partiLoop = false;
  hideall = false;
  hideallSuccess = false;

  constructor(private router: Router) {
    this.deactivationCode = new FormControl('');
  }

  remaining: number = 3;

  confirmCode() {
    console.log('provvided', this.deactivationCode.value);
    console.log('right One', this.codiceGiusto);
    if (
      this.deactivationCode.value.replace(/(\r\n|\n|\r)/gm, '') ===
      this.resetTries.replace(/(\r\n|\n|\r)/gm, '')
    ) {
      console.log('OK');
      alert('CODICE DI RESET INSERITO, TENTATIVI RIPRISTINATI.');
      return (this.remaining = 3);
    }
    if (
      this.deactivationCode.value.replace(/(\r\n|\n|\r)/gm, '') ===
      this.codiceGiusto.replace(/(\r\n|\n|\r)/gm, '')
    ) {
      console.log('OK');
      const confirmPopup = confirm(
        'HAI INSERITO UN SET DI CODICI DI DISARMAMENTO MISSILI?. PROCEDERE?'
      );
      if (confirmPopup == true) {
        return alert('I MISSILI SONO STATI DISARMATI.');
      }
    } else {
      this.remaining -= 1;
      this.deactivationCode.setValue('');
      if (this.remaining <= 0) {
        this.hideall = true;
      }
      return false;
    }
  }

  onEnded() {
    console.log('onEnded');
    this.partiLoop = true;
  }
  ngOnInit() {}
}
