export default class User{
    #nome
    #email
    #nascimento 
    #role
    #ativo
    constructor (nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        if(nome === ''){
            throw new Error('formato não válido');
        }else{
            this.#nome = nome;
        }
    }

    get email(){
        return this.#email;
    }

    set email(email){
        this.#email = email;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    }

    exibirInfos(){
        return `${this.nome}, ${this.role}`;
    }
}

