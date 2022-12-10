import { Component, ViewEncapsulation  } from '@angular/core';
var ngfaker = require('ng-faker');

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DirectComponent {
  messages: any = [];

  ngOnInit(){
    for(var i = 0; i < 15; i++){
      this.messages.push({id: i, text: ngfaker.lorem.phrase(), time: ngfaker.random.number()})
    }
  }

  sendMessage(message: any){
    if(message.value.trim().length == 0)
      return;
    console.log('message', message.value);
    const currentDate = new Date();
    const time = currentDate.getHours() + ":" + currentDate.getMinutes();
    this.messages.push({id: this.messages.length, text: message.value, time: time})
    message.value = "";
  }
}
