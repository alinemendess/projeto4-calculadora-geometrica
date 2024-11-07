/* Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

function triangle(base, height) {
    base = prompt('Digite o valor da base')
    height = prompt('Digite o valor da altura')
    return alert((base*height/2))
}
function retangle(base,height){
    base = prompt('digite o valor da base')
    height = prompt('digite o valor da altura')
    return alert(base*altura)
}
function square(side){
    side1 = prompt('digite o valor do primeiro lado')
    side2 = prompt('digite o valor do segundo lado')
    return alert(side*side)
}
function trapeze(baseLargest,baseSmallest, height){ 
    baseLargest = prompt('digite o valor da base maior')
    baseSmallest = prompt('digite o valor da base menor')
    height = prompt('digite o valor da altura')
    return alert((baseLargest+baseSmallest)*height/2)
}
function circle(ray){ 
    ray = prompt('digite o valor do raio')
    return alert(3.14*(ray*ray))
}
let menu = ''
do{
menu = prompt(`opção disponível
    1- área do triângulo
    2- área do retângulo
    3- área do quadrado
    4- área do trapézio
    5- área do circulo
    6- sair`)
    switch(menu){
        case'1': 
        triangle()
        break
        case'2': 
        retangle(parseInt(prompt('digite o valor')))
        break
        case'3':
        square(parseInt(prompt('digite o valor')))
        break
        case'4':
        trapeze(parseInt(prompt('digite o valor')))
        break
        case'5':
        circle(parseInt(prompt('digite o valor')))
        break
        case'6': 
        alert('saindo...')
        break
    }
} while(menu !=="6")