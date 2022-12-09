import { Component, ViewEncapsulation  } from '@angular/core';
var ngfaker = require('ng-faker');

@Component({
  selector: 'app-messages-section',
  templateUrl: './messages-section.component.html',
  styleUrls: ['./messages-section.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MessagesSectionComponent {
  messages: any = [
    { text: "casc", time: "12:11"}
  ]

  constructor(){
  }
  ngOnInit(){
    for(var i = 0; i < 15; i++){
      this.messages.push({text: ngfaker.lorem.phrase(), time: ngfaker.random.number()})
    }
  }
}
