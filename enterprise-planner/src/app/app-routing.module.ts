import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { ParticipantGridComponent } from './participant-grid/participant-grid.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = 
[
  {path:'participants', component:ParticipantComponent},
  {path:'attribute', component:AttributeComponent},
  {path:'grid', component:ParticipantGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
