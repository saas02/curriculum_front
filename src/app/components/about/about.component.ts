import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  @Input()
  profile:profile;
  
  constructor( ) {    
    this.profile = {
      items: {}
    };      
  }

  ngOnInit(): void {
  }

}
