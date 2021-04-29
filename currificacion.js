const baseCalculoPotencia = 2

const CalculoPotencia = (exponente)=>(base)=>{
    return exponente*base;
}

const cuadrado = CalculoPotencia(2)
const cubo = CalculoPotencia(3)

const resultadoCuadrado = cuadrado(baseCalculoPotencia)
const resultadoCubo = cubo(baseCalculoPotencia)

console.log(`El resultado del cuadrado de ${baseCalculoPotencia} es ${resultadoCuadrado}`);
console.log(`El resultado del cubo de ${baseCalculoPotencia} es ${resultadoCubo}`);