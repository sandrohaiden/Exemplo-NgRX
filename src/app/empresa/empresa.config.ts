import { FormControl, FormGroup } from '@angular/forms';
import { Empresa } from '../models/empresa';

export function formGroupPadraoEmpresa(empresa?: Empresa): FormGroup {
  if(!empresa) {
    empresa = new  Empresa();
  }

  const form: FormGroup = new FormGroup({
    id: new FormControl(empresa.id ? empresa.id : ''),
    nome: new FormControl(empresa.nome ? empresa.nome : ''),
    cnpj: new FormControl(empresa.cnpj ? empresa.cnpj : ''),
    dataAbertura: new FormControl(empresa.dataAbertura ? empresa.dataAbertura : ''),
    capital: new FormControl(empresa.capital ? empresa.capital : ''),
    representante: new FormControl(empresa.representante ? empresa.representante : '')
  });

  return form
}
