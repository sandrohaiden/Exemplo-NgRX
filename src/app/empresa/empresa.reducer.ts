import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Empresa } from '../models/empresa';
import * as actions from './empresa.actions';

const entityAdapter = createEntityAdapter<Empresa>();

export interface EmpresaState extends EntityState<Empresa> {
  carregando: boolean;
}

const initialState = entityAdapter.getInitialState({
  carregando: false,
});

export function empresaReducer(baseState, baseAction) {
  return createReducer(
    initialState,

    on(actions.Listar, (state) => ({ ...state, carregando: true })),

    on(actions.ListarComSucesso, (state, action) =>
      entityAdapter.setAll(action.payload, { ...state, carregando: false })
    )
  )(baseState, baseAction);
}

export const { selectAll } = entityAdapter.getSelectors();
