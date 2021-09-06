import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  formData:any = {};
  constructor(private router: Router) { }

  participantForm = new FormGroup({
    // name: new FormControl(''),
    // quantity: new FormControl(''),
    // rate: new FormControl(''),
  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.participantForm.value);
    localStorage.setItem("formData",JSON.stringify(this.participantForm.value));
  }

  addBooks(){
    this.router.navigate(["/book"]);
  }


}




















//   onAnchorClick(item){
//     this.selected = item.value; 
//     this.open = false;
//     switch(this.selected){
//         case "A": 
//           this.router.navigate(["/A"]);
//           break;
//     }
// }
