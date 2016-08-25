import {Component} from '@angular/core';
import {Message} from './message.module'
@Component({
     moduleId: module.id,
selector:'login',
templateUrl:'./login.component.html'


})

export class LoginComponent{
    messages:Message[]=[new Message("Hello")];
    onSubmit(){
const rnd=Math.floor(Math.random()*100);
const message=new Message(rnd +" is an awsome nymber!");
this.messages.push(message);

    }
    
}