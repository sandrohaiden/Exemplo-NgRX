import { FormControl, FormGroup } from '@angular/forms';
import { Funcionario } from '../models/funcionario';

export function formGroupPadraoFuncionario(funcionario?: Funcionario): FormGroup {
  if(!funcionario) {
    funcionario = new  Funcionario();
  }

  const form: FormGroup = new FormGroup({
    id: new FormControl(funcionario.id ? funcionario.id : ''),
    nome: new FormControl(funcionario.nome ? funcionario.nome : ''),
    empresa: new FormControl(funcionario.empresa ? funcionario.empresa : ''),
    nascimento: new FormControl(funcionario.nascimento ? funcionario.nascimento : ''),
    cargo: new FormControl(funcionario.cargo ? funcionario.cargo : ''),
  });

  return form
}
