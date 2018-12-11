import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthsessService {
   public cognome: String;
   public nome: String;
   public allowed: String;
   public studente_id: Number;
  constructor() { }
   public destroy(): void {
      this.allowed = null;
      this.studente_id = null;
      this.cognome = null;
      this.nome = null;
   }
}
