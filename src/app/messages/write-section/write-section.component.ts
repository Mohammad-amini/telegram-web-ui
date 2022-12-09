import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-write-section',
  templateUrl: './write-section.component.html',
  styleUrls: ['./write-section.component.css']
})
export class WriteSectionComponent {
  writeStatus: boolean = false;
  text: string = "cascas";
  @ViewChild('text') textContainer!: ElementRef;
  @Output() newItemEvent = new EventEmitter<string>();
  sendMessage(){
    this.newItemEvent.emit(this.textContainer.nativeElement.value);
  }
}