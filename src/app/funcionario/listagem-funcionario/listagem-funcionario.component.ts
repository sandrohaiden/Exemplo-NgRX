import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.scss']
})
export class ListagemFuncionarioComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'empresa', 'cargo'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editar(funcionario: Funcionario) {
    this.router.navigateByUrl(`/empresas/${funcionario.id}`);
  }

}
