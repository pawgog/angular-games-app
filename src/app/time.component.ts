import {Component} from '@angular/core'

@Component({
  selector: 'currentTime',
  template: `
    <span>{{date | date:'dd.MM.yyyy'}} / <b>{{date | date:'HH:mm:ss'}}</b></span>
  `
})
export class Time {
  private date;
   
  constructor() { 
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  } 
}
