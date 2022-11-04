const Carro = (modelo, marca, ano) => ({
    modelo,
    marca, 
    ano,
    getData: () => ({modelo, marca, ano})
})

const carro = Carro('Argo', 'Fiat', 2020);
console.log(carro.getData())