import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, State, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Empresa } from '../models/empresa';
import { EmpresaState } from './empresa.reducer';
import { selectById } from './empresa.selector';

@Injectable()
export class EmpresaResolver implements Resolve<Empresa> {
  // TODO: Trocar tipo do store
  constructor(private store: Store<EmpresaState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Empresa> {
    const id = route.params['id'];

    return this.store.pipe(select(selectById(id)), first());

    // return of(new Empresa());
  }
}
