import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { ResourceService } from '../service-generico/api-generico-v2.service';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService extends ResourceService<Funcionario> {
  constructor(private http: HttpClient) {
    super(http, 'funcionarios')
  }
}
