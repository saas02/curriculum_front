import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { language } from './../../interfaces/languague';
import { InformacionService } from './../../services/informacion.service';
import { LanguageService } from './../../services/language.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  @Input()
  profile:profile;
  language:language;

  constructor(
    private InformacionService:InformacionService,
    private languageService: LanguageService
  ) {
    this.profile = {
      items: {
        experiences:{

        }
      }
    };
    this.language =  languageService.language;
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profile = this.InformacionService.getOrderByExperiences(this.profile);
  }

}
