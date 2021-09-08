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
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  constructor(private router: Router) { }

  participantForm = new FormGroup({
    name: new FormControl(''),
    options: new FormControl(''),
    // quantity: new FormControl(''),
    // rate: new FormControl(''),
  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.participantForm.value);
    this.formData = Object.assign(this.formData, this.participantForm.value);
    this.addUser(this.formData);
    this.participantForm.reset();
  }

  addUser(user:any){
    let users: any[]=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users') || '{}');
      users = [user,...users];
    }else{
      users = [user];
    }
    localStorage.setItem("Users",JSON.stringify(users));
  }

  // getJSON(){
  //   // localStorage.getItem("formData",JSON.stringify(this.participantForm.value));
  //   var obj = JSON.parse(localStorage.getItem('formData'));
  // }

 

  // addBooks(){
  //   this.router.navigate(["/book"]);
  // }


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
