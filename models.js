export class Desenvolvedor {
    #nome;
    #jogo;
    #publicadora;

    constructor(nome, publicadora) {
        this.#nome = nome;
        this.#publicadora = publicadora;
    }

    get nome() {
        return this.#nome ? this.#nome.toUpperCase() : 'Sem nome';
    }

    get publicadora() {
        return this.#publicadora ? this.#publicadora.toUpperCase() : 'Sem nome';
    }
}

export class Jogo {
    #nome;
    #tag;
    #especificacoes;
    #idioma;

    constructor(nome, idioma, especificacoes, tag) {
        this.#nome = nome;
        this.#idioma = idioma;
        this.#especificacoes = especificacoes;
        this.#tag = tag;
    }

    get nome() {
        return this.#nome ? this.#nome.toUpperCase() : 'Sem nome';
    }

    get jogo() {
        return this.#nome;
    }

    get tag() {
        return this.#tag;
    }

    get idioma() {
        return this.#idioma;
    }

    get especificacoes() {
        return this.#especificacoes;
    }
}

export class Usuario {
    #nome;
    #inventario;
    #comunidade;
    #reviews;
    #perfil;
    #conquista;
    #insignia;
    #jogos;

    constructor(nome, inventario, comunidade, reviews, perfil, conquista, insignia, jogos) {
        this.#nome = nome;
        this.#inventario = inventario;
        this.#comunidade = comunidade;
        this.#reviews = reviews;
        this.#perfil = perfil;
        this.#conquista = conquista;
        this.#insignia = insignia;
        this.#jogos = jogos;
    }

    get nome() {
        return this.#nome ? this.#nome.toUpperCase() : 'Sem nome';
    }

    get inventario() {
        return this.#inventario;
    }

    get comunidade() {
        return this.#comunidade;
    }

    get reviews() {
        return this.#reviews;
    }

    get perfil() {
        return this.#perfil;
    }

    get conquista() {
        return this.#conquista;
    }

    get insignia() {
        return this.#insignia;
    }

    get jogos() {
        return this.#jogos;
    }
}