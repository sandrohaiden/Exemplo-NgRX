import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { ResourceService } from '../service-generico/api-generico-v2.service';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService extends ResourceService<Empresa> {
  constructor(private http: HttpClient) {
    super(http, 'empresas')
  }
}
