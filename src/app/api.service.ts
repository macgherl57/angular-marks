import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthsessService } from './authsess.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private sessionService: AuthsessService) { }
  API_URL = 'https://berchet.regonline.it/didattica/stud_free/angular_json';
  public getVoti(paramForm) {
    // console.log(paramForm.studente_id);
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // const params = new HttpParams().set('studente_id', paramForm.studente_id).set('quad', paramForm.quad).set('as',paramForm.as);    
    return this.httpClient.post(`${this.API_URL}/select_all.html`, paramForm, httpOptions);
  }
  public validate(loginForm) {
    return this.httpClient.post(`${this.API_URL}/password.html`, loginForm);
  }
  public isSignedIn() {
    return !!this.sessionService.allowed;
  }
  public doSignOut() {
    this.sessionService.destroy();
  }
}
