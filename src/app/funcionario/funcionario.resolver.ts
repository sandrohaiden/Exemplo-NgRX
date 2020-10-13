import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, State, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Funcionario } from '../models/funcionario';

@Injectable()
export class FuncionarioResolver implements Resolve<Funcionario> {
  // TODO: Trocar tipo do store
  constructor(private store: Store<any>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Funcionario> {
    const id = route.params['id'];

    // return this.store.pipe(select(selectById(id)), first());

    return of(new Funcionario());
  }
}
