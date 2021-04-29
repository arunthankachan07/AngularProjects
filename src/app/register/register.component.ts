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
    
    var accno=this.accnum;
    var password=this.pswd;
    var name=this.accname;
    var result = this.ds.register(name,accno,password)
    if(result){
      alert("Registration Successful");
      this.router.navigateByUrl("")
    }
    else{
      alert("User is already exist, Please Login")
    }
  }
  }

