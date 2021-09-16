import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterpriseGridModule } from "@ainosoft/appops-br-core-components/components/enterprise-grid/dist/enterprise-grid";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModuleSet } from "../common/material-module";
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttributeComponent, ChecklistDatabase } from './attribute/attribute.component';
import { ParticipantGridComponent } from './participant-grid/participant-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    NavbarComponent,
    AttributeComponent,
    ParticipantGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleSet,
    ReactiveFormsModule,
    FormsModule,
    EnterpriseGridModule,
    HttpClientModule
  ],
  providers: [ChecklistDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
