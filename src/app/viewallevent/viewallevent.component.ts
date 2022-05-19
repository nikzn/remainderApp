import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-viewallevent',
  templateUrl: './viewallevent.component.html',
  styleUrls: ['./viewallevent.component.css']
})
export class ViewalleventComponent implements OnInit {
accnod:any
name:any  
accno:any
event:any
  constructor(private router:Router, private ds:ServicesService) {


    this.accno =JSON.parse(localStorage.getItem("currentAccno")||'')
    this.ds.viewAllEvent(this.accno)
     .subscribe((result:any)=>{
       if(result){
       this.event=result.event
       localStorage.setItem("id",result.id)
       }
     },
     (result)=>
     {
       alert(result.error.message)
     }
     )
     console.log(this.event);
   }

  ngOnInit(): void {
  }


  deleteEvent(_id:any)
  {
    this.ds.deleteEvent(_id)
    .subscribe((result:any)=>
    {
      if(result)
      {
    alert(result.message)
    this.router.navigateByUrl("dashboard")

    }
    },
    (result:any)=>{
      alert(result.error.message)
      })
  }
  



}
