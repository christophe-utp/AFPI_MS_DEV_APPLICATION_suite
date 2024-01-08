export class Document {
    constructor(titre) {
        this.titre = titre
    }

    ToString() {
        console.log(`Document : ${this.titre}`);
    }
}