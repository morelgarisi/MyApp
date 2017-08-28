import { Component, Input,Output, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from './httpInterceptor.component';
import { HttpModule } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  providers: [HttpClient],
  templateUrl: './Templates/registerComponent.html',
})

export class registercomponent  { 
  private email;
  private password;
  private Token:any;
  constructor (private httpService:HttpClient,private router:Router)
  {}


  createUser(){
  let newUser={
     email:this.email,
     password:this.password, 
   }

  this.httpService.post("http://todos.moonsite.co.il/api/register", newUser).subscribe(data=>{
   this.Token=data;
   localStorage.setItem('Token', JSON.stringify(data));

//    navigate to tasks
if(this.Token){
    this.router.navigate([''])
}

   
}); 
}
 }
 