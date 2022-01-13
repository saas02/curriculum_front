import { Component, OnInit, Input, SimpleChanges  } from '@angular/core';
import { profile } from './../../interfaces/profile';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  @Input()
  profile:profile;
  
  constructor(
    
  ) {
    this.profile = {
      items: {
        skills:{

        }
      }
    };
   }

  ngOnInit(): void {
  }

}
