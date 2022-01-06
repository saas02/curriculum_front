import { Component, OnInit } from '@angular/core';

import { InformacionService } from './../../services/informacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any = {}; 

  constructor(
    private InformacionService:InformacionService
  ) {
    this.profile = this.InformacionService.profile
  }

  ngOnInit(): void {
  }

}
