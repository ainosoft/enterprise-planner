import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = 
[
  {path:'participants', component:ParticipantComponent},
  {path:'book', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
