import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';

import { InformacionService } from './services/informacion.service';

import { NgxLoadingXConfig, POSITION, SPINNER, NgxLoadingXModule } from 'ngx-loading-x';

const ngxLoadingXConfig: NgxLoadingXConfig = {
  show: false,
  bgBlur: 2,
  bgOpacity: 5,
  bgLogoUrl: '',
  bgLogoUrlPosition: POSITION.topLeft,
  bgLogoUrlSize: 100,
  spinnerType: SPINNER.threeStrings,
  spinnerSize: 220,
  spinnerColor: 'white',
  spinnerPosition: POSITION.centerCenter,
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    SkillComponent,
    PortfolioComponent,
    ExperienceComponent,
    ReferenceComponent,
    EducationComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig)
  ],  
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
