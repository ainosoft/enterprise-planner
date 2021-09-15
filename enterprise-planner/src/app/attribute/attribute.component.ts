import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  navigatedData;
  formData:any = {};
  values = [];

  attributeForm: FormGroup;

  constructor(private fb: FormBuilder) {

  
   }

  ngOnInit(): void {
    this.navigatedData = history.state;
    // console.log(this.navigatedData);

    this.attributeForm = this.fb.group({
      ch1: new FormControl(''),
      ch2: new FormControl(''),
      ch3: new FormControl(''),
      ch4: new FormControl(''),
      ch5: new FormControl(''),
      ch6: new FormControl(''),
      attribute: this.fb.array([
        this.fb.control(null)
      ])
 
    });
  }

  onSubmit(values){
    console.log(values);
    this.formData = Object.assign(this.formData, this.attributeForm.value);
    localStorage.setItem("Users",JSON.stringify(this.formData));
  }

  

  addValue(): void {
    (this.attributeForm.get('attribute') as FormArray).push(
      this.fb.control(null)
    );
  }

  removevalue(index) {
    (this.attributeForm.get('attribute') as FormArray).removeAt(index);
  }

  getAttributesFormControls(): AbstractControl[] {
    return (<FormArray> this.attributeForm.get('attribute')).controls
  }

 

}



// addValue(){
  //   this.values.push({value: ""});
  // }

  // removevalue(i){
  //   this.values.splice(i,1);
  // }