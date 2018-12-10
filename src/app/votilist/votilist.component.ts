import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-votilist',
  templateUrl: './votilist.component.html',
  styleUrls: ['./votilist.component.css']
})
export class VotilistComponent implements OnInit {
  private voti: Array<Object> = [];
  submitted: Boolean = false;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
  }
  
  public getVoti(paramForm) {
    paramForm.studente_id = this.activatedRoute.snapshot.paramMap.get('studente_id');
    this.apiService.getVoti(paramForm).subscribe((data: Array<Object>) => {
      this.voti = data;
      this.submitted = true;
      // console.log(data);
    });
  }
  public doSignout() {
    this.apiService.doSignOut();
    this._route.navigate(['login']);
  }
}
