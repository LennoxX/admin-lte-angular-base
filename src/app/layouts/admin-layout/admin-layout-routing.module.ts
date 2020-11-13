import { TesteComponent } from './../../pages/teste/teste.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teste', component: TesteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
