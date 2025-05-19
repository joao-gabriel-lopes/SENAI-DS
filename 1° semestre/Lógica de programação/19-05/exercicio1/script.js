let matriz = [
    ['Beterraba', 'Abacaxi', 'Tesoura', 'Lua', 'Banana'],
    ['Javali', 'Macaco', 'Cachorro', 'Gato', 'Cor'],
    ['Alicate', 'Maionese', 'Maçã', 'Maionese', 'Joaquim'],
    ['Ivonete', 'Louça', 'Balão', 'Tangerina', 'Júpiter'],
    ['Beterraba', 'Tião', 'Carlos', '', 'Beterraba']
]

matriz[0][4] = 'Dinossauro'
matriz[1][1] = 'Goku'
matriz[4][1] = ''

matriz.splice(3, 1)

matriz.push(['', 'Carla', '', 'Jéssica', ''])

for (i = 0; i < matriz.length; i++){
    console.log(matriz[i])

}