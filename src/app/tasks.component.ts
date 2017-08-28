import { Component, Input,Output, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from './httpInterceptor.component';
import { HttpModule } from '@angular/http';



@Component({
  selector: 'tasks',
  providers: [HttpClient],
  templateUrl: './Templates/taskComponent.html',

})
export class taskComponent  { 
    private task:any;
    private order:any;
    private tasksArrayObject:any;
    private isHandeled=false;
    private indexId;
    private isTaskExists:boolean=false;
    private updatedTaskValue;
    private newTask;
    private newOrder;
    private toggleViewSavebutton:boolean=false;


    constructor (private httpService:HttpClient){//var name : var export class
    this.getTasks();
  }

editSingleTask(task,order){
this.task=task;
this.order=order;
}


editMode2(task,order, id){
    this.task=task;
    this.order=order;
    this.indexId=id
    
    }


//get 
  getTasks(){
    this.httpService.get("http://todos.moonsite.co.il/api/tasks").subscribe(result => {
      
        let obj:any; //result is of type Response, so we cant acess result._body
        obj=result;
        let data = JSON.parse(obj._body);
        this.tasksArrayObject=data.tasks   //now  tasksArrayObject is 'clean' array of task that we can iterate threw and parse
         
           });

           
  }
  
  
  addTask(){

    let newTask={
        task:this.newTask, 
        order:this.newOrder
    }
    
      // before post, validate if task already exists :
      let exists:boolean=false;
      //set flag to true if order already exists, than alert user
      if(this.tasksArrayObject.length>1){
        for(let i=0;i<this.tasksArrayObject.length;i++){
            if(this.tasksArrayObject[i].order==this.newOrder){
              exists=true;
            }
          }
        
      }
     
      if(exists){
        this.isTaskExists=true;
      }
      else{
        this.isTaskExists=false;
    this.httpService.post("http://todos.moonsite.co.il/api/tasks", newTask).subscribe(result=>{
        this.getTasks();
    })
      }
    


  }


 


  updateTask(item){
   
   let newTask={
      id:item._id,
       task:this.task,
       order:item.order
   }
    

    

   this.httpService.put(`http://todos.moonsite.co.il/api/tasks/`+newTask.id, newTask).subscribe(result=>{
   
   let obj:any;
    obj=result;
    let data = JSON.parse(obj._body);
    console.log(data);
    this.indexId=-1;
    this.getTasks();
    

})


  }



  deleteTask(item){


    let taskToDelete=item._id;
    this.httpService.delete(`http://todos.moonsite.co.il/api/tasks/`+taskToDelete).subscribe(result=>{
        
        
         this.getTasks();
         
     
     })

  }

}

  

   
   