import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = 
[
  {path:'participants', component:ParticipantComponent},
  {path:'attribute', component:AttributeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
