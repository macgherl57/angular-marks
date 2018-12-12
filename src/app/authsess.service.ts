import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthsessService {
   public cognome: String;
   public nome: String;
   public classe: String;
   public studente_id: Number;
  constructor() { }
   public destroy(): void {
      this.classe = null;
      this.studente_id = null;
      this.cognome = null;
      this.nome = null;
   }
}
