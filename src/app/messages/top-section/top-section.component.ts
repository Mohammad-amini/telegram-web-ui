import { Component, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TopSectionComponent{

  constructor(private route: ActivatedRoute, private router: Router){}
  goBack(){
    this.router.navigate([''], { relativeTo: this.route });
  }
}
