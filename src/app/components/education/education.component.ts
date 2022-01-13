import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { InformacionService } from './../../services/informacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  @Input()
  profile:profile;
  
  constructor(
    private InformacionService:InformacionService
  ) { 
    this.profile = {
      items: {
        educations:{

        }
      }
    };
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profile = this.InformacionService.getOrderByEducations(this.profile);
  }

}
