import { Component, ViewEncapsulation  } from '@angular/core';
var ngfaker = require('ng-faker');

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class ChannelComponent {
  messages: any = [];

  ngOnInit(){
    for(var i = 0; i < 15; i++){
      this.messages.push({id: i, text: ngfaker.lorem.phrase(), time: ngfaker.random.number(), type: 'channel'})
    }
  }
}
