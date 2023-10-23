function convertFtoC(f){
c = (f - 32) / 2
    return c
}
let currentTemp = 92;
let celciusTemp = convertFtoC(currentTemp);
console.log(celciusTemp)
console.log(convertFtoC(-40))

function converCtoF(c){
    f = (c * 2) + 32
    return f
}
console.log(converCtoF(30))
console.log(converCtoF(60))


