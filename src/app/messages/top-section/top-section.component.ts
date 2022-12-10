import { Component, ViewEncapsulation, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ngfaker = require('ng-faker');

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TopSectionComponent{
  @Input() info: any;
  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.info = {
      content: ngfaker.name.firstName() + " " + ngfaker.name.lastName() + "<br/>12:15",
      profile: {
        image: `profile-img-0${Math.ceil(Math.random() * 5)}.jpg`,
      }
    }
  }
  goBack(){
    this.router.navigate([''], { relativeTo: this.route });
  }
}
