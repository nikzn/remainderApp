import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm=this.fb.group({

    accname:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })




  constructor(private router:Router,private ds:ServicesService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register()
  {
 var accname=this.registerForm.value.accname
 var accno=this.registerForm.value.accno
 var pswd=this.registerForm.value.pswd

 if(this.registerForm.valid)
{
this.ds.register(accname,accno,pswd)
.subscribe((result:any)=>{
if(result){
  alert(result.message)
  this.router.navigateByUrl("")
}
},
(result:any)=>{
alert(result.error.message)
})
  
}
else
{
  console.log("Invalid Form");
  
}
    
  }



}
