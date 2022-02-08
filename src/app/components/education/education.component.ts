import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { language } from './../../interfaces/languague';
import { InformacionService } from './../../services/informacion.service';
import { LanguageService } from './../../services/language.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  @Input()
  profile:profile
  language:language

  constructor(
    private InformacionService:InformacionService,
    private languageService: LanguageService
  ) { 
    this.profile = {
      items: {
        educations:{

        }
      }
    };
    this.language =  languageService.language;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profile = this.InformacionService.getOrderByEducations(this.profile);
  }

}
