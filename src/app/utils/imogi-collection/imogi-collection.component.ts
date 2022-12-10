import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import  * as imogies from '../imogi-collection.json';

@Component({
  selector: 'app-imogi-collection',
  templateUrl: './imogi-collection.component.html',
  styleUrls: ['./imogi-collection.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ImogiCollectionComponent implements OnInit {
  imogies: any;
  @Output() selectedImogi: EventEmitter<any> = new EventEmitter();;
  constructor() { }

  ngOnInit(): void {
    this.imogies = (imogies as any).default;;
  }

  sendImogi(imogi: any){
    this.selectedImogi.emit(imogi)
    console.log('sendImogi', imogi)
  }
}
