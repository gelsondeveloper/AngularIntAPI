
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',
   loadChildren: './home/home.module#HomeModule'
   },
   { path: 'usuario',
   loadChildren: './usuario/usuario.module#UsuarioModule'
   },
   { path: '', redirectTo: '/home', pathMatch: 'full' }

  ];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule, RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
