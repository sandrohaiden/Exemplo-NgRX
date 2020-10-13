import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EmpresaState } from './empresa.reducer';

import * as fromReducer from './empresa.reducer';

const feature = createFeatureSelector<EmpresaState>('empresa');

export const selectAll = createSelector(feature, fromReducer.selectAll);

export const carregando = createSelector(feature, (state) => state.carregando);

export const selectById = (id: number) =>
  createSelector(feature, (state) => {
    return state.entities[id];
  });
