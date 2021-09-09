import { Injectable } from '@angular/core';
import { Participant } from '../participant/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  
  gridData: Participant[] = [];
  constructor() { }

  getGridData(): Participant[] {
    console.log(this.gridData);
    return this.gridData;
  }

}
