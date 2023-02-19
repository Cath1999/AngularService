import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/Add/add/add.component';
import { EditComponent } from './Persona/Edit/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';

const routes: Routes = [

  //components routing
{path:'listar', component:ListarComponent},
{path:'add',component:AddComponent},
{path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
