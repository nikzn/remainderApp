import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router:Router, private ds:ServicesService,private fb:FormBuilder) { }

  eventForm=this.fb.group({
    date:['',[Validators.required]],
    name:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    description:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })

  ngOnInit(): void {
  }

addEvent()
{


  var date=this.eventForm.value.date;
  var name=this.eventForm.value.name;
  var description=this.eventForm.value.description;
  var accno=JSON.parse(localStorage.getItem("currentAccno")||'')
this.ds.addEvent(accno,date,name,description)
.subscribe((result:any)=>
{
  if(result)
  {
    localStorage.setItem("id",JSON.stringify(result.id))
alert(result.message)
this.router.navigateByUrl("dashboard")
}
},
(result:any)=>{
  alert(result.error.message)
  })
}
}

