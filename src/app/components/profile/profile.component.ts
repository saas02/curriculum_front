import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {  
  
  @Input()
  profile:profile;
  
  constructor() {
    this.profile = {}; 
  }

  ngOnInit(): void {
    
  }

}
