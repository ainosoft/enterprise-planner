import { Component, OnInit } from '@angular/core';
import { GridData, GridConfig, ActionTypes } from '@ainosoft/appops-br-core-components/components/enterprise-grid/dist/enterprise-grid';
import { ParticipantActionDispatcher } from '../action-dispatcher/ParticipantActionDispatcher';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../participant/participant';
import { ParticipantService } from '../services/participant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-participant-grid',
  templateUrl: './participant-grid.component.html',
  styleUrls: ['./participant-grid.component.scss']
})
export class ParticipantGridComponent implements OnInit, GridData {

  gridDataArr:any=[];
  // participantArray:Participant[]=[{name:'gy',type:'eqw'}];
  participantArray:Participant[];
  
   //create  the object of gridConfig
   gridData: GridData = this;
   gridConfig = new GridConfig();

  constructor(private router: Router,private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.setGridConfiguration();
    // this.data();
  }

  participantActionDispatcher = new ParticipantActionDispatcher(this);

  // Method for Set the gridConfiguration
  setGridConfiguration() {
    //set the grid Header
    this.gridConfig.setGridHeader = "Participant";

    this.gridConfig.featureConfig("selectRow", true);
    this.gridConfig.addColumnConfig("name", "Participant Name", 1);
    this.gridConfig.addColumnConfig("type", "participant Type", 2);

    this.gridConfig.actionConfig("editValue", true, "edit-attribute", false, ActionTypes.entity, null , true, 'edit', 'Edit');
    this.gridConfig.featureConfig("enableSearchPlaceholder", true);
    this.gridConfig.featureConfig("enableActionToolbar", true);
    this.gridConfig.featureConfig("enableSearchToolbar", true);
    this.gridConfig.actionConfig("onRowClick", true, "on-row-click", false);
    
}

getFirstPage(): Promise<any> {
  let promise = new Promise((resolve, reject) => {
    let participantData = this.participantService.getGridData();
    console.log(participantData);
    
    resolve(participantData);
   
  });
  return promise;
}

getNextPage(id: number, pageSize: number): Promise<any> {
  throw new Error('Method not implemented.');
}

onGridDataLoad(data: any): void {
  throw new Error('Method not implemented.');
}

EditAttribute(data:any) {
  console.log(data);
  this.router.navigate(["/attribute/"],{ state: data });
}

}
