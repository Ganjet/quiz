import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  bol = false;
  ngOnInit() {
  }
  move() {
    this.bol = true;
    let start = Date.now(); // сохранить время начала
    let timer = setInterval(function () {
      // вычислить сколько времени прошло из opts.duration
      let timePassed = Date.now() - start;
      let train = document.getElementById('train');
      train.style.top = timePassed / 5 + 'px';

      if (timePassed > 2500) clearInterval(timer);

    }, 20);
  }

  moves() {
    if (this.bol === false) {
      alert('Машина залокана')
      return;
    } else {
      let start = Date.now(); // сохранить время начала
      let timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        let timePassed = Date.now() - start;
        let train = document.getElementById('trains');
        train.style.top = timePassed / 5 + 'px';

        if (timePassed > 1500) clearInterval(timer);

      }, 20);
      let number = document.getElementById('number');
      number.style.display = 'inherit'
    }

  }
}
