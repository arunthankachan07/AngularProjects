import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  accno=""
  pwd=""
  account_details:any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

}

  constructor() { }

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
    
    var accno = this.accno;
        var pwd = this.pwd;
        let details = this.account_details;
        if (accno in details) {
            if (pwd == details[accno]["password"]) {
                alert("Login  Success");
            }
            else {
              alert("Incorrect Password");
            }
        }
        else {
          alert("Invalid Account");
        }
  }

}
