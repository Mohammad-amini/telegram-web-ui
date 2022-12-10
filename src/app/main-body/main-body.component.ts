import { Component, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ngfaker = require('ng-faker');
   
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainBodyComponent {
  chats: any = [];

  constructor(private route: ActivatedRoute, private router: Router){}

  profileImg(){
    return "0" + Math.ceil(Math.random() * 10 % 3)
  }

  ngOnInit(){
    for(var i = 0; i < 15; i++){
      var j = Math.ceil(Math.random() * 3 - 1);
      this.chats.push({
        'title': ngfaker.name.firstName(),
        'message': [ngfaker.lorem.phrase(), ngfaker.lorem.phrase(), ngfaker.lorem.phrase()][j],
        'count': Math.ceil(Math.random() * 1000),
        'type': ['direct', 'group', 'channel'][j]
      })
    } 
    console.log(this.chats)
  }

  showMessage(route: any){
    switch (route.type){
      case 'direct':
        this.router.navigate(['/direct'], { relativeTo: route });
        break;
      case 'group':
        this.router.navigate(['/group'], { relativeTo: route });
        break;
      case 'channel':
        this.router.navigate(['/channel'], { relativeTo: route });
        break;
    }
  }
}
