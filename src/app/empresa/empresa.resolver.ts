import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, State, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Empresa } from '../models/empresa';

@Injectable()
export class EmpresaResolver implements Resolve<Empresa> {
  // TODO: Trocar tipo do store
  constructor(private store: Store<any>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Empresa> {
    const id = route.params['id'];

    // return this.store.pipe(select(selectById(id)), first());

    return of(new Empresa());
  }
}
