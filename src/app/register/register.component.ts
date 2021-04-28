import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accname=""
  accnum=""
  pswd=""
  aim="Registration Page"
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    alert("Registration Successfull");
    var accno=this.accnum;
    var password=this.pswd;
    var name=this.accname;
    let details=this.ds.account_details
    if (accno in details) {
      alert("User is already exist, Please Login")
  }
  else {
    details[accno]={
      name,accno,password,amount:0
    }
    alert("Registration Successful");
    this.router.navigateByUrl("")
  }
  }
}
