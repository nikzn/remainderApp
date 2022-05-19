import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


//REGISTER API CALLBACKS

register(accname:any,accno:any,pswd:any) {

  const data={
    accname,
    accno,
    pswd
  }
return this.http.post('http://localhost:3000/register',data)

}

//LOGIN API

login(accno:any,pswd:any)
{
  const data={
    accno,
    pswd
  }

  return this.http.post('http://localhost:3000/login',data)
}

//ADD EVENT API

addEvent(accno:any,date:any,name:any,description:any)
{
  const data={
   date,
   name,
   description,
   accno
  }

  return this.http.post('http://localhost:3000/addEvent',data)
}


viewAllEvent(accno:any)
{

const data={
  accno
}

return this.http.post('http://localhost:3000/viewAllEvent',data)

}

deleteEvent(name:any)
{
 
return this.http.delete('http://localhost:3000/deleteEvent/'+name)

}

todayEvent(accno:any,today:any)
{

const data={
  accno,
  date:today
}

return this.http.post('http://localhost:3000/todayEvent',data)

}
tommorowEvent(accno:any,tommorow:any)
{

const data={
  accno,
  date:tommorow
}

return this.http.post('http://localhost:3000/tommorowEvent',data)

}  
onDelete(accno:any)
{

return this.http.delete('http://localhost:3000/onDelete/'+accno)
}

}
