import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  accno=""
  pwd=""
  accnum=""
  pswd=""
  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  accnoChange(event:any){
    this.accno = event.target.value;
    console.log(this.accno);
  }
  pwdChange(event:any){
    this.pwd = event.target.value;
    console.log(this.pwd);
  }

  login(){
    
    var accno = this.accnum;
    var password = this.pswd;
    const result=this.ds.login(accno,password) 
    if(result){
      alert("Login  Success");
      this.router.navigateByUrl("dashboard")
    } 
     }
  register(){
    this.router.navigateByUrl("register")
    
  }

}
