import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { formGroupPadraoEmpresa } from '../empresa.config';

@Component({
  selector: 'app-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss'],
})
export class CadastrarEditarComponent implements OnInit {
  form: FormGroup;
  empresa: Empresa;

  constructor(private activatedRoute: ActivatedRoute) {
    this.form = formGroupPadraoEmpresa();
  }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params.id) {
      const empresa: Empresa = this.activatedRoute.snapshot.data.empresa;
      this.form = formGroupPadraoEmpresa(empresa);
    } else {
      this.form = formGroupPadraoEmpresa();
    }
  }

  salvar(){
    if(this.form.valid) {
      const empresa: Empresa = this.form.value;

      if(empresa.id) {
        // Atualizar
      } else {
        // Cadastrar
      }
    }
  }
}
