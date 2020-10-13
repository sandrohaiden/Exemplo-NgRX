import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaState } from '../empresa.reducer';
import * as actions from '../empresa.actions';
import { selectAll } from '../empresa.selector';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cnpj', 'dataAbertura'];
  dataSource$ = this.store.select(selectAll);

  constructor(private router: Router, private store: Store<EmpresaState>) {}

  ngOnInit(): void {
    this.listar();
  }

  editar(empresa: Empresa) {
    this.router.navigateByUrl(`/empresas/${empresa.id}`);
  }

  listar() {
    this.store.dispatch(actions.Listar());
  }
}
