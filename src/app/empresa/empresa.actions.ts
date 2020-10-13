import {createAction, props} from "@ngrx/store"
import { Empresa } from "../models/empresa";


const CONTEXTO = 'EMPRESA';

export const Listar = createAction(
  `[${CONTEXTO}] Listar do backend`
)

export const ListarComSucesso = createAction(
  `[${CONTEXTO}] Listado com Sucesso`,
  props<{payload: Empresa[]}>()
);
