import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { ChannelComponent } from './channel/channel.component';
import { DirectComponent } from './direct/direct.component';
import { MainTopComponent } from './main-top/main-top.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainMessagesComponent } from './main-messages/main-messages.component';
import { TopSectionComponent } from './messages/top-section/top-section.component';
import { MessagesSectionComponent } from './messages/messages-section/messages-section.component';
import { WriteSectionComponent } from './messages/write-section/write-section.component';
import { MessageSectionComponent } from './messages/message-section/message-section.component';
import { ImogiCollectionComponent } from './utils/imogi-collection/imogi-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    // FormsModule,
    GroupComponent,
    ChannelComponent,
    DirectComponent,
    MainTopComponent,
    MainBodyComponent,
    MainMessagesComponent,
    TopSectionComponent,
    MessagesSectionComponent,
    WriteSectionComponent,
    MessageSectionComponent,
    ImogiCollectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
