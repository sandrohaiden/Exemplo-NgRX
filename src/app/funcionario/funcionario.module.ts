import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarEditarFuncionarioComponent } from './cadastrar-editar-funcionario/cadastrar-editar-funcionario.component';
import { RouterModule, Routes } from '@angular/router';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FuncionarioResolver } from './funcionario.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListagemFuncionarioComponent,
  },
  {
    path: 'cadastrar',
    component: CadastrarEditarFuncionarioComponent,
  },
  {
    path: ':id',
    component: CadastrarEditarFuncionarioComponent,
  },
];

@NgModule({
  declarations: [
    CadastrarEditarFuncionarioComponent,
    ListagemFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [FuncionarioResolver],
})
export class FuncionarioModule {}
