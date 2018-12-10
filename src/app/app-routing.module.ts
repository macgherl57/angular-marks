import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotilistComponent} from './votilist/votilist.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './can-activate.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'list/:studente_id', component: VotilistComponent, canActivate: [CanActivateGuard]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
