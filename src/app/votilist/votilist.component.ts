import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthsessService } from '../authsess.service';
@Component({
  selector: 'app-votilist',
  templateUrl: './votilist.component.html',
  styleUrls: ['./votilist.component.css']
})
export class VotilistComponent implements OnInit {
  public voti: Array<Object> = [];
  public submitted: Boolean = false;
  private cognome: String;
  private nome: String;
  public anni: Array<Object>;
  public defaultValue: String;
  public defaultValue1: Object;
  private classe: String;
  public quad: Array<Object>;
  public error: Boolean = false;
  private errorMsg: string;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private authsessService: AuthsessService
              ) { }

  ngOnInit() {
    this.anni = [{val:'2016_2017',n:'2016-2017'}, {val:'2017_2018', n:'2017-2018'}];
    this.defaultValue = this.anni[1]["val"];
    this.quad = [ {val:1, n:"1° Trimestre"}, {val:2, n: "2° Pentamestre"} ];
    this.defaultValue1 = this.quad[1]["val"];
  }
  
  public getVoti(paramForm) {
    paramForm.studente_id = this.activatedRoute.snapshot.paramMap.get('studente_id');
    this.apiService.getVoti(paramForm).subscribe((data: Array<Object>) => {
      this.voti = data;
      if (data[0] == "Nessuno studente") {
        this.error = true;
        this.submitted = false;
        this.errorMsg = "Non esistono dati per l'anno e il periodo scelti."
      } else {
        this.submitted = true;
        this.error = false;
        this.cognome = this.authsessService.cognome;
        this.nome = this.authsessService.nome;
        this.authsessService.classe = this.voti[0]["classe"];
        this.classe = this.authsessService.classe;
      }
    });
  }
}
