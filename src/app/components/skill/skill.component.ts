import { Component, OnInit, Input, SimpleChanges  } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { InformacionService } from './../../services/informacion.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit {

  @Input()
  profile:profile;

  constructor(
    private InformacionService:InformacionService
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

  ngOnChanges(changes: SimpleChanges) {    
    this.profile = this.InformacionService.getOrderBySkills(this.profile);
  }

}
