import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



loginForm=this.fb.group({

  accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})


  constructor(private router:Router,private ds:ServicesService,private fb:FormBuilder) { 

  }

  ngOnInit(): void {
  }


  
login()
{
var accno=this.loginForm.value.accno
var pswd=this.loginForm.value.pswd
if(this.loginForm.valid)
{
  this.ds.login(accno,pswd)
  .subscribe((result:any)=>
  {
    if(result)
    {
      localStorage.setItem("currentAccno",JSON.stringify(result.currentAccno))
      localStorage.setItem("User",JSON.stringify(result.currentUser))
      localStorage.setItem("token",JSON.stringify(result.token))
      alert(result.message)
      this.router.navigateByUrl("dashboard")
    }
  },
  (result)=>
  {
alert(result.error.message)
  })
}
else
{
  console.log("Operation Denied");
  
}
}
}










