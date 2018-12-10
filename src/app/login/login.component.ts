import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthsessService } from '../authsess.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private validation: Array<Object> = [];
  private studente_id: Number;
  constructor(private apiService: ApiService, private sessionService: AuthsessService,
              private router: Router) { }

  ngOnInit() {
  }
  public validate(loginForm) {
    this.apiService.validate(loginForm).subscribe((data: Array<Object>) => {
      this.validation = data;
      this.studente_id = this .validation[0]["studente_id"];
      // console.log('studente_id: ' + this.validation[0]["studente_id"]);
      if (this.studente_id > 0) {
        this.sessionService.allowed = 'true';
        this.sessionService.studente_id = this.studente_id;
        //console.log('Printing parameters to session: ' + this.sessionService.studente_id + '; ' + this.sessionService.allowed);
        //return;
        this.router.navigate(['list', this.studente_id]);
      }
    });
  }
}
