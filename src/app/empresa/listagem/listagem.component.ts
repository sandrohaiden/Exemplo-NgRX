import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cnpj', 'dataAbertura'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editar(empresa: Empresa) {
    this.router.navigateByUrl(`/empresas/${empresa.id}`);
  }

}
