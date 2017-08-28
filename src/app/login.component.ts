import { Component, Input,Output, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from './httpInterceptor.component';
import { HttpModule } from '@angular/http';
import {Router} from '@angular/router';




@Component({
  selector: 'login',
  providers: [HttpClient],
  templateUrl: './Templates/loginComponent.html',

})
export class loginComponent  { 
  private email ;
  private password;
  private Token:any;
  private resStatus:number;

  
  constructor (private httpService:HttpClient,private  router:Router){
   

  };


navigateToresitration(){
    this.router.navigate(['/register'])
}


  createUser(){
    let userData={
       password:this.password, 
       email:this.email
     }
     
     

    this.httpService.post("http://todos.moonsite.co.il/api/login", userData).subscribe(
        data=>
        {
        let obj:any;
        obj=data;
        let resulte=JSON.parse(obj._body);
        localStorage.setItem('Token', resulte.token);
   
         if(resulte.token){ 
        this.router.navigate(['/tasks'])
        }
    
   
     }, 
  err => {
 
      let obj:any;
      obj=err;
      this.resStatus=obj;      
    }

);
 


  }

   }
   