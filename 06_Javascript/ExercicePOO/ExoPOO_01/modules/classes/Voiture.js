export class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque
        this.modele = modele
        this.vitesse = vitesse
    }

    ToString() {
        console.log(`Voiture : ${this.marque} ${this.modele} roule à ${this.vitesse} km/h`);
    }

    Accelerer() {
        this.vitesse += 10
        console.log(`La voiture accelère de 10 km/h : la nouvelle vitesse est de : ${this.vitesse}`);
        return `<p>La ${this.marque} accelère de 10 km/h : la nouvelle vitesse est de : ${this.vitesse}</p>`
    }

    Tourner() {
        this.vitesse -= 5
        console.log(`La voiture tourne : la nouvelle vitesse est de : ${this.vitesse}`);
    }
}