import { Component, ViewEncapsulation, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-write-section',
  templateUrl: './write-section.component.html',
  styleUrls: ['./write-section.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class WriteSectionComponent {
  writeStatus: boolean = false;
  showImogiPanel: boolean = false;
  message: string = "cascas";

  @ViewChild('text') textContainer!: ElementRef;

  @Output() newItemEvent = new EventEmitter<ElementRef>();

  ngOnInit(){
  }

  startWrite(event: any = null){
    if(this.textContainer.nativeElement.value.length != 0){
      this.writeStatus = true;
    }else{
      this.writeStatus = false;
    }
  }

  sendMessage(){
    if(this.textContainer.nativeElement.value.trim().length != 0){
      this.newItemEvent.emit(this.textContainer.nativeElement);
      this.writeStatus = false;
      this.showImogiPanel = false;
    }
  }
  focusText(){
    this.writeStatus = true;
    this.showImogiPanel = false
  }
  focusoutText(){
    this.writeStatus = false;
    this.showImogiPanel = false
  }
  toggleImogiesPanel(){
    this.showImogiPanel = !this.showImogiPanel;
  }

  getImogi(imogi: any): void{
    this.textContainer.nativeElement.value += `${imogi.icon}`
    this.startWrite()
  }
}