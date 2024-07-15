var agora = new Date()
var diasem = agora.getDay()

switch(diasem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2: 
        console.log('terça')
        break
    case 3:
        console.log('quata')
    case 4: 
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
        break
    default:
        console.log('data invalida')
}