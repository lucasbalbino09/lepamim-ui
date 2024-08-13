import { Base } from "./base";

 enum TipoAtividade {
    coletiva = 1,
    individual = 2
 }

export class Atividades extends Base {
    duração = 0    
    tipo = TipoAtividade.coletiva
    constructor() {
        super();
    }
}