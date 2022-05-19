import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

accno:any
user:any
id:any
event:any
event1:any
tommorow:any
accno1:any
  constructor(private router:Router ,private ds:ServicesService) {

    this.user=JSON.parse(localStorage.getItem("User")||'')
    this.accno=JSON.parse(localStorage.getItem("currentAccno")||'')
    let today=new Date().toISOString().split('T')[0] 
   console.log(today);
   console.log(new Date());
   
    this.ds.todayEvent(this.accno,today)
    .subscribe((result:any)=>{
      if(result){
      this.event=result.event
      
      }
    },
    (result)=>
    {
      alert(result.error.message)
    }
    )
    console.log(this.event);
    var nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1)
     this.tommorow=nextDay.toISOString().split('T')[0]
console.log(this.tommorow);
this.ds.tommorowEvent(this.accno,this.tommorow)
.subscribe((result1:any)=>{
  if(result1){
  this.event1=result1.event
  }
},
(result1)=>
{
  alert(result1.error.message)
}
)
console.log(this.event1);
  }





   

  ngOnInit(): void {

    if(!localStorage.getItem("currentAccno"))
{
  alert("please login")
  this.router.navigateByUrl("")
}
  }


deletefromParent()
{
  this.accno1=JSON.parse(localStorage.getItem("currentAccno")||'')
}
onCancel()
{
  this.accno1=""
}

onDelete(event:any)
{
  this.ds.onDelete(event)
  .subscribe((result2:any)=>{
  if(result2) {
    alert(result2.message)
    this.router.navigateByUrl("")
  } 
},
(result2:any)=>{
  alert(result2.error.message)
} 
)
}

  logout()
  {
    localStorage.removeItem("currentAccno")
    localStorage.removeItem("user")
    this.router.navigateByUrl("")
  }
  

}
