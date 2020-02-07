import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginsService } from '../../master/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginform:FormGroup;
  username:string;
  password:string;

   localstoarray={};
  
  constructor(private formbuilder:FormBuilder,private logservice:LoginsService) { }

  get f()
  {
    return this.loginform.controls;
  }

  ngOnInit() {
    console.log("OK BAHI");
    this.loginform = this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
      
    // Manually i have set username and password
    this.localstoarray[0]= 'm1';
    this.localstoarray[1]= 'm2';
    localStorage.setItem('key1', JSON.stringify(this.localstoarray));
  }

  loginsubmitData(){
    
    this.username = this.f.username.value;
    this.password = this.f.password.value;
    let item =JSON.parse(localStorage.getItem('key1'));
    
    // Single id fetch from db
    this.logservice.getContacts_single(this.username,this.password).subscribe((res)=> {
      let usernameDB = res.username
      let passworddb = res.password
      console.log(usernameDB);
      if(usernameDB==this.username && passworddb==this.password)
      {
        console.log("You are really Brilliant person")
        alert("Correct Your password and username");
      }
      else
      {
        console.log("Dont Worry Tray agian")
        alert("Incorrect Your password and username");
      }
    });


  // Multiple id fetch from db
   /* this.logservice.getContacts().subscribe((res)=>{
      
      //console.log(res[0].password);

      let usernameDB = res[0].username
      let passworddb = res[0].password
      if(usernameDB==this.username && passworddb==this.password)
      {
        console.log("You are really Brilliant person")
        alert("Correct Your password and username");
      }
      else
      {
        console.log("Dont Worry Tray agian")
        alert("Incorrect Your password and username");
      }
      
    });    */ 

}

  formreset()
  {

  }

}
