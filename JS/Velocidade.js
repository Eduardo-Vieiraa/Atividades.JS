class Car {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade +=100;
        return `velocidade: ${this.velocidade} km/h`;
    }

    frear() {
        this.velocidade -=20;
        if (this.velocidade < 0) this.velocidade = 0;
        return `velocidade: ${this.velocidade} km/h`;
    }
}

const meuCarro = new Car('Honda' , "Civic" , 2021);
console.log(meuCarro.acelerar());
console.log(meuCarro.frear());
