import { UsuarioComponent } from './usuario.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   component: UsuarioComponent
   }


  ];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UsuarioRoutingModule { }
