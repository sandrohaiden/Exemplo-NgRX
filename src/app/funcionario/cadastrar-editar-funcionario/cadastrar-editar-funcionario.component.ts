import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formGroupPadraoFuncionario } from '../funcionario.config';
import { compareWithGenerico } from '../../utils/utils';
import { Funcionario } from 'src/app/models/funcionario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-editar-funcionario',
  templateUrl: './cadastrar-editar-funcionario.component.html',
  styleUrls: ['./cadastrar-editar-funcionario.component.scss'],
})
export class CadastrarEditarFuncionarioComponent implements OnInit {

  form: FormGroup = formGroupPadraoFuncionario();
  empresas: any[] = [];
  funcionario: Funcionario;
  compare = compareWithGenerico;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params.id) {
      const funcionario: Funcionario = this.activatedRoute.snapshot.data.funcionario;
      this.form = formGroupPadraoFuncionario(funcionario);
    } else {
      this.form = formGroupPadraoFuncionario();
    }
  }

  salvar(){
    if(this.form.valid) {
      const funcionario: Funcionario = this.form.value;

      if(funcionario.id) {
        // Atualizar
      } else {
        // Cadastrar
      }
    }
  }
}
