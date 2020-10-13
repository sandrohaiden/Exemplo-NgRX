import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CadastrarEditarComponent } from './cadastrar-editar/cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpresaResolver } from './empresa.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListagemComponent,
  },
  {
    path: 'cadastrar',
    component: CadastrarEditarComponent,
  },
  {
    path: ':id',
    component: CadastrarEditarComponent,
  },
];

@NgModule({
  declarations: [ListagemComponent, CadastrarEditarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [EmpresaResolver],
})
export class EmpresaModule {}
