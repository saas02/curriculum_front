import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { InformacionService } from './../../services/informacion.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  @Input()
  profile:profile;

  constructor(
    private InformacionService:InformacionService
  ) {
    this.profile = {
      items: {
        experiences:{

        }
      }
    };
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {    
    this.profile = this.InformacionService.getOrderByExperiences(this.profile);
  }

}
