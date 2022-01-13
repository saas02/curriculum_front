import { Component, OnInit, Input  } from '@angular/core';
import { profile } from './../../interfaces/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  @Input()
  profile:profile;

  constructor() {
    this.profile = {
      items:{
        
      }
    };
   }

  ngOnInit(): void {
  }

}
