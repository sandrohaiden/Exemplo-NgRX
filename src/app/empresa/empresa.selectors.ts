import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectState = createFeatureSelector<any/* TODO: trocar para o tipo do state de Empresa */>("empresa");

export const selectAll = createSelector(selectState, entityState => entityState.selectAll);

export const selectById = (id: number) =>
    createSelector(selectState, state => {
        return state.entities[id];
    });
