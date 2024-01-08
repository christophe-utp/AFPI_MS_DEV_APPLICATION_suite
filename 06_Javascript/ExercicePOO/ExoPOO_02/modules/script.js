import { Voiture } from "./classes/Voiture.js"
import { Moto } from "./classes/Moto.js"

const result = document.querySelector(".result")

let voiture = new Voiture("Renault", "Kangoo", 240000, 2003, true)
let moto = new Moto("BMW", "R1150R Rockster", 65000, 2005)

result.innerHTML = voiture.Display()
result.innerHTML += moto.Display()