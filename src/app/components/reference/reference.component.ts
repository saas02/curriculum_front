import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html'
})
export class ReferenceComponent implements OnInit {

  @Input()
  profile:profile; 

  constructor() { 
    this.profile = {
      items: {
        
      }
    };
  }

  ngOnInit(): void {
  }

}
