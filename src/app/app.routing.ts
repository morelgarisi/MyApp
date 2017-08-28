import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { loginComponent } from './login.component';
import { registercomponent }  from './register.component';
import { taskComponent }  from './tasks.component';

const appRotes:Routes=[
 
    {
        path:'',
        component:loginComponent

    },
    {
        path:'register',
        component:registercomponent
    },

    {
        path:'tasks',
        component:taskComponent
    }

 
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRotes);