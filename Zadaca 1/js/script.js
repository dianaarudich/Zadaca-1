console.log("Diana Rudic")
//Zadatak 1 

var dianaRudic = "Diana Rudic"
console.log(dianaRudic) 
//Zadatak 2: dodajem vrijednost varijabli uz pomoc operatora jednakosti = 

var broj1 = 8
var broj2 = 4
console.log(broj1 + broj2)
console.log(broj1 - broj2)
console.log(broj1 * broj2)
console.log(broj1 / broj2)
console.log(broj1 % broj2)
/*Zadatak 3: sabiranjem varijabli dobijem rezultat 12, oduzimanjem 4, mnozenjem 32, djeljenjem 2*, a ostatak je 0*/  

var x = 2
var y = 3
var i = 5 
var z = 6
var j = 10
console.log(x + y + i + z + j)
console.log(x - y - i - z - j)
console.log(x * y * i * z * j)
/*Zadatak 4: sabiranjem dobijem rezultat 26, oduzimanjem -22, mnozenjem dobijem 1800*/

var Diana
var Rudic
console.log("Diana" + " " + "Rudic")
/*Zadatak 5: dodala sam prazan string da napravim razmak izmedju imena i prezimena tako da ne mijenjam varijable*/ 

var danUSedmici = 5

if(danUSedmici == 1){
console.log("Ponedjeljak")
}
else if(danUSedmici == 2){
console.log("Utorak")
}
else if(danUSedmici == 3){
console.log("Srijeda")
}
else if(danUSedmici == 4){
console.log("Cetvrtak")
}
else if(danUSedmici == 5){
console.log("Petak")
}
else if(danUSedmici == 6){
console.log("Subota")
}
else if(danUSedmici == 7){
console.log("Nedjelja")
}
else{
console.log("Greska")
}



switch(danUSedmici){
case 1:
console.log("Ponedjeljak")
break
case 2:
console.log("Utorak")
break
case 3:
console.log("Srijeda")
break
case 4:
console.log("Cetvrtak")
break
case 5:
console.log("Petak")
break
case 6:
console.log("Subota")
break
case 7:
console.log("Nedjelja")
break
default:
console.log("Greska")

}
//Zadatak 6


var broj4 = 8 
if(broj4 % 2 ==0 ){
console.log("broj je paran")
}
else{
console.log("broj je neparan")
}
/*Zadatak 7 ispitivanje parnosti nekog  broja: 8 je paran ispisace broj je paran ukoliko upisemo npr.: 11 ispisace broj je neparan*/


var fizzBroj = 30

if(fizzBroj % 3 == 0 && fizzBroj % 5 == 0){
console.log("Fizz Buzz")
}
else if(fizzBroj % 3 == 0){
console.log("Fizz")
}
else if(fizzBroj % 5 == 0){
console.log("Buzz")
}
else{
console.log("Nije djeljivo ni sa 3 ni sa 5")
}
//Zadatak 8



var sekundeUnos = 90179

var dani = Math.floor(sekundeUnos / (60 * 60 * 24))
console.log(dani)
var sati = Math.floor((sekundeUnos % (60 * 60 * 24)) / 3600)
console.log(sati)
var minute = Math.floor((sekundeUnos % 3600 ) / 60)
console.log(minute)
var sekunde = Math.floor(sekundeUnos % 60)
console.log(sekunde)
//Zadatak 9