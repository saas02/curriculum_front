import { Component, OnInit } from '@angular/core';

import { InformacionService } from './../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  profile:any = {};
  
  constructor( 
    private InformacionService:InformacionService
  ) { 
    this.profile = this.InformacionService.profile
  }

  ngOnInit(): void {
  }

}
