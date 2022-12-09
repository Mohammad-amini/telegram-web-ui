import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMessagesComponent } from "./main-messages/main-messages.component";
import { DirectComponent } from "./direct/direct.component";

const routes: Routes = [
  { path: '', component: MainMessagesComponent },
  { path: 'direct', component: DirectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }