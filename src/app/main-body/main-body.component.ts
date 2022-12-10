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
      this.chats.push({'title': ngfaker.name.firstName(), 'message': ngfaker.lorem.phrase()})
    } 
    console.log(this.chats)
  }

  showMessage(route: any){
    this.router.navigate(['/direct'], { relativeTo: this.route });
  }
}
