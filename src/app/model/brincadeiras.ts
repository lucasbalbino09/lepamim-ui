import { Base } from "./base";


export class Brincadeira extends Base {
    duracao = 0;
    objetivo = ''
    faixaEtaria = ''
    qtdParticipantes = 0
    descricaoAtividade = ''
    materialdaDinamica? : string[] = []
    constructor() {
        super();
    }
}
