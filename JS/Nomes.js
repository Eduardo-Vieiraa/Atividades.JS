class Pessoa{

    constructor(nome, idade,profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

const pessoa1 = new Pessoa('Ana' , 30, 'Engenheira')
const pessoa2 = new Pessoa('João', 28, 'Professor')
const pessoa3 = new Pessoa('Fernada', 25,"Fisioterapeuta")

pessoa1.cumprimentar();
pessoa2.cumprimentar();
pessoa3.cumprimentar();