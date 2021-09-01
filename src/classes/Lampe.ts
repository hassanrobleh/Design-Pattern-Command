export class Lampe {

    nom: string;

    constructor(n: string) {
        this.nom = n;
    }

    marche() {
        return "Lampe allumée";
    }

    arret() {
        return "Lampe éteinte";
    }

}