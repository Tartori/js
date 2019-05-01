import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'Hello Application';
  public name: string;
  public greeting: string;

  public sayHello() {
    var today = new Date()
    var curHr = today.getHours()
    var greetingHeader = 'Good Evening '
    if (curHr < 12) {
      console.log('good morning')
    } else if (curHr < 14) {
      console.log('good day')
    } else if (curHr < 18) {
      console.log('good afternoon')
    }

    this.greeting = greetingHeader + this.name + '!';
    this.name = '';
  }
}
