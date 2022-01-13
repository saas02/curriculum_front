import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input()
  profile:profile; 
  
  constructor() {
    this.profile = {
      items: {}
    };
  }

  ngOnInit(): void {
  }

}
