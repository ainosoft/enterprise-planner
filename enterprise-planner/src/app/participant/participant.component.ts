import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticipantService } from '../services/participant.service';
import { Participant } from './participant';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  formData:any = {};
  
  constructor(private router: Router, private participantService: ParticipantService) { }

  participantForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
  });

  ngOnInit(): void {
  }

  reset(){
    this.participantForm.reset();
  }

  submit(){
    this.formData = Object.assign(this.formData, this.participantForm.value);
    localStorage.setItem("Users",JSON.stringify(this.formData));
    //method call
    this.addParticipant(this.participantForm.value);
    this.router.navigate(["/grid"]);
    this.participantForm.reset();
  }

  addParticipant(participant){
    let participants = new Participant();
    console.log(participant);
    participants.name = participant.name;
    participants.type = participant.type;
    this.participantService.gridData.push(participants);
  }


}