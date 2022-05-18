import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Name: string = "";
  Email: string = "";
  Password: string = "";

  submit(form: any) {
    var Name = form.Name;
    var Email = form.Email;
    var Password = form.Password;

    alert("Welcome " + Name + ". You have successfully registered.")
  }
}
