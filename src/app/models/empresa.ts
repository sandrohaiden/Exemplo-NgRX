import { Abstract } from "./abstract";

export class Empresa extends Abstract {
  nome: string;
  cnpj: string;
  dataAbertura: Date;
  capital: number;
  representante: string;
}
