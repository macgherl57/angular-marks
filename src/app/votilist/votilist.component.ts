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
  private voti: Array<Object> = [];
  public submitted: Boolean = false;
  private cognome: String;
  private nome: String;
  public anni: Array<String>;
  public defaultValue: String;
  public defaultValue1: Object;
  private classe: String;
  public quad: Array<Object>;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private authsessService: AuthsessService
              ) { }

  ngOnInit() {
    this.anni = ['2016_2017','2017_2018'];
    this.defaultValue = this.anni[1];
    this.quad = [ {val:1, n:"1° Trimestre"}, {val:2, n: "2° Pentamestre"} ];
    this.defaultValue1 = this.quad[1]["val"];
  }
  
  public getVoti(paramForm) {
    paramForm.studente_id = this.activatedRoute.snapshot.paramMap.get('studente_id');
    this.apiService.getVoti(paramForm).subscribe((data: Array<Object>) => {
      this.voti = data;
      this.submitted = true;
      this.cognome = this.authsessService.cognome;
      this.nome = this.authsessService.nome;
      this.classe = this.authsessService.classe;
      // console.log(data);
    });
  }
}
