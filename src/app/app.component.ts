import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = [
    "basic",
    "advance",
    "pro"
  ];
  @ViewChild('f') signupForm: NgForm;
  user = {
    name: '',
    email: '',
    select: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    console.log("Form Submitted!")
    console.log(this.signupForm);
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.email;
    this.user.select = this.signupForm.value.sel1;
    this.user.password = this.signupForm.value.password;
    this.submitted = true;
    if (this.signupForm.invalid && this.signupForm.touched) {
      alert("Ok");
    }
    this.signupForm.reset();
  }
}
