class Person {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    ehMaiorDeIdade() {
        return this.idade >=18 ? `${this.nome} é maior de idade.` : `${this.nome} não é maior de idade.`;
            }
}

const pessoa1 = new Person('Eduardo',26);
const pessoa2 = new Person('Nicolas', 1);
const pessoa3 = new Person('Fernanda', 25);
console.log(pessoa1.ehMaiorDeIdade());
console.log(pessoa2.ehMaiorDeIdade());
console.log(pessoa3.ehMaiorDeIdade());