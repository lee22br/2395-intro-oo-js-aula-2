import User from "./User.js";

export class Admin extends User {
    constructor (nome, email, nascimento, role = 'admin', ativo = true ){
        super (nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas){
        return `${nomeDoCurso} criado com ${vagas} vagas`
    }
}
