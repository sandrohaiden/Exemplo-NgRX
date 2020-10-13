import { Injectable } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as actions from "./funcionario.actions"
import { concatMap, first, map, switchMap } from 'rxjs/operators';

@Injectable()
export class FuncionarioEffects {
  constructor(private service: EmpresaService, private action$: Actions) {}

  @Effect()
  listar$ = this.action$.pipe(
    ofType(actions.Listar),
    concatMap(action => this.service.list()),
    map(response => actions.ListarComSucesso({payload: response})),
    first()
  )
}
