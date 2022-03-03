class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    
  }

  calcularArea() {
    return this.altura * this.largura
  }
  area(){
  return this.calcularArea()
  
  }
}
let retangulofalso = new Retangulo(40, 70);
console.log(retangulofalso.calcularArea())

let retanguloverdadeiro = new Retangulo(80, 20);
console.log(retanguloverdadeiro.calcularArea())

let retanguloarea = new Retangulo(20,50)
console.log(retanguloarea.Area())

