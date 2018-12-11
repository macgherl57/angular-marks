import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private apiService: ApiService, private _route: Router) {}
  title = 'Liceo Berchet - Pagella';
  public doLogout() {
    this.apiService.doSignOut();
    this._route.navigate(['login']);
  }
}
