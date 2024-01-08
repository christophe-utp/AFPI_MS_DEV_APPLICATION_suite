import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, clim) {
        super(marque, modele, kilometrage, annee)
        this.clim = clim
    }

    Display() {
        return `<p>Voiture : ${super.Display()} - ${this.clim ? "climatisée" : "non climatisée"}</p>`
    }
}