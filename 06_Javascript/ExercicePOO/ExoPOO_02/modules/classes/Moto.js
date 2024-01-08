import { Vehicule } from "./Vehicule.js";

export class Moto extends Vehicule {
    constructor(marque, modele, kilometrage, annee) {
        super(marque, modele, kilometrage, annee)
    }

    Display() {
        return `<p>Moto : ${super.Display()}</p>`
    }
}