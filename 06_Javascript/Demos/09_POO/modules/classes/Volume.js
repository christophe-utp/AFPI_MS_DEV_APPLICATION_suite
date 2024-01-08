import { Document } from "./Document.js";

export class Volume extends Document {
    constructor(titre, auteur){
        super(titre)
        this.auteur = auteur
        this.ToString()
    }

    ToString() {
        super.ToString()
        console.log(`Auteur : ${this.auteur}`);
    }
}