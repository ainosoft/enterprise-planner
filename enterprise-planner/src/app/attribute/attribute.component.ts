import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  navigatedData;
  formData:any = {};
  values = [];


  constructor() { }

  attributeForm = new FormGroup({
    ch1: new FormControl(''),
    ch2: new FormControl(''),
    ch3: new FormControl(''),
    ch4: new FormControl(''),
    ch5: new FormControl(''),
    ch6: new FormControl(''),
    attribute: new FormControl(''),
  });

  ngOnInit(): void {
    // this.navigatedData = history.state;
    // console.log(this.navigatedData);
  }

  onSubmit(){
    // this.formData = this.attributeForm.value;
    // console.log(this.formData);
    this.formData = Object.assign(this.formData, this.attributeForm.value);
    localStorage.setItem("Users",JSON.stringify(this.formData));
  }

  addValue(){
    this.values.push({value: ""});
  }

  removevalue(i){
    this.values.splice(i,1);
  }
  

}
