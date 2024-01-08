import { Voiture } from "./classes/Voiture.js";

const result = document.querySelector(".result")

let voiture1 = new Voiture("Bmw", "Serie 1", 80)
let voiture2 = new Voiture("Mercedes", "GLB", 100)

// Avec injection dans le HTML
result.innerHTML += voiture1.Accelerer()
result.innerHTML += voiture1.Accelerer()
result.innerHTML += voiture1.Accelerer()

result.innerHTML += voiture2.Accelerer()
result.innerHTML += voiture2.Accelerer()

// Sans injection dans le HTML
voiture2.Tourner()
voiture2.Tourner()

voiture1.ToString()
voiture2.ToString()