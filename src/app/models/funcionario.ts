import { Abstract } from "./abstract";
import { Empresa } from "./empresa";

export class Funcionario extends Abstract {
  nome: string;
  empresa: Empresa;
  nascimento: Date;
  cargo: string;
}
