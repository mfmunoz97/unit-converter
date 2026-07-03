/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-bar") 
const lengthEl = document.getElementById("meter-p")
const volumeEl = document.getElementById("liter-p")
const massEl = document.getElementById("kilo-p")

const meterToFeet = 3.281
const literToGal = 0.264
const kiloToPound = 2.204

convertEl.addEventListener("click", function(){
    let calcNumber = Number(inputEl.value)
    lengthEl.innerHTML = 
    `${calcNumber} meters = ${(calcNumber * 3.281).toFixed(2)} feet |
     ${calcNumber} feet = ${(calcNumber / 3.281).toFixed(2)} meters`
    
    volumeEl.innerHTML = 
    `${calcNumber} liters = ${ (calcNumber * 0.264).toFixed(2) } gallons |
     ${calcNumber} gallons = ${ (calcNumber / 0.264).toFixed(2) } liters
    `
    massEl.innerHTML = 
    `${calcNumber} kilograms = ${ (calcNumber * 2.204).toFixed(2) } pounds |
    ${calcNumber} pounds = ${ (calcNumber / 2.204).toFixed(2) } kilos
    `
})

