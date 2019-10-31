import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'usuario', component: UsuarioComponent},
  {path: '' , pathMatch: 'full', redirectTo: '/home'}

  ];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
