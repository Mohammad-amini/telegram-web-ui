import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainTopComponent {
  toggleMenu: boolean = false;

  toggleMenuChange(){
    this.toggleMenu = !this.toggleMenu;
    console.log(this.toggleMenu)
  }

}
