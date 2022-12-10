import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMessagesComponent } from "./main-messages/main-messages.component";
import { DirectComponent } from "./direct/direct.component";
import { GroupComponent } from "./group/group.component";
import { ChannelComponent } from "./channel/channel.component";

const routes: Routes = [
  { path: '', component: MainMessagesComponent },
  { path: 'direct', component: DirectComponent },
  { path: 'group', component: GroupComponent },
  { path: 'channel', component: ChannelComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }