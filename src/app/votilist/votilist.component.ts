import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthsessService } from '../authsess.service';
@Component({
  selector: 'app-votilist',
  templateUrl: './votilist.component.html',
  styleUrls: ['./votilist.component.css']
})
export class VotilistComponent implements OnInit {
  private voti: Array<Object> = [];
  submitted: Boolean = false;
  private cognome: String;
  private nome: String;
  private anni: Array<String>;
  private defaultValue: String;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private _route: Router,
              private authsessService: AuthsessService
              ) { }

  ngOnInit() {
    this.anni = ['2016_2017','2017_2018'];
    this.defaultValue = this.anni[1];
  }
  
  public getVoti(paramForm) {
    paramForm.studente_id = this.activatedRoute.snapshot.paramMap.get('studente_id');
    this.apiService.getVoti(paramForm).subscribe((data: Array<Object>) => {
      this.voti = data;
      this.submitted = true;
      this.cognome = this.authsessService.cognome;
      this.nome = this.authsessService.nome;
      // console.log(data);
    });
  }
}
