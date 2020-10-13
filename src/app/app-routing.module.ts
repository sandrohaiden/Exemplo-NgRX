import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/empresas',
    pathMatch: 'full'
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionario/funcionario.module').then(m => m.FuncionarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
