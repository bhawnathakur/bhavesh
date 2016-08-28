import {Component,OnInit} from '@angular/core';
import{AccountModel} from './account.model'
@Component({
    moduleId:module.id,
selector:'account',
templateUrl:'./account.component.html',



})

export class AccountComponent {
 model = new AccountModel('neerajthakur2@gmail.com');
 submitted = false;
 onSubmit() {
    this.submitted = true;
  }
  get diagnostic() { return JSON.stringify(this.model); }
  newAccount() {
  this.model = new AccountModel('neerajthakur2@gmail.com');
}
}
  