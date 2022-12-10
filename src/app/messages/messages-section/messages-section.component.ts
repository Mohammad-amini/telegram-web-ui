import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-messages-section',
  templateUrl: './messages-section.component.html',
  styleUrls: ['./messages-section.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MessagesSectionComponent {
  @Input() messages: any = []
  arriveBottom: boolean = true;
  @ViewChild('messagesContainer') private messagesContainer: any;

  constructor(){}

  ngOnInit(){
    try {
        if(this.messagesContainer?.nativeElement.scrollTop == this.messagesContainer?.nativeElement.scrollHeight){
          this.arriveBottom = true;
        }
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  // ngDoCheck(){
  //   console.log(this.messagesContainer?.nativeElement.scrollTop, this.messagesContainer?.nativeElement.scrollHeight)
  //   try {
  //       if(this.messagesContainer.nativeElement.scrollTop != this.messagesContainer.nativeElement.scrollHeight){
  //         this.arriveBottom = false;
  //       }
  //     } catch(err) { }
  //   }

  showContainer(){
        try {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
            this.arriveBottom = true;
          console.log(this.messagesContainer)
        } catch(err) { }
  }
}
