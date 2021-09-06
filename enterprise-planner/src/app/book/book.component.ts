import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private router: Router) { }

  bookForm = new FormGroup({
    bookName: new FormControl(''),
    quantity: new FormControl(''),
    rate: new FormControl(''),
  });


  ngOnInit(): void {
  }

  submit(){
    localStorage.setItem("formData",JSON.stringify(this.bookForm.value));
    this.router.navigate(["/participants"]);
  }

}
