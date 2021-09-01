import { Lampe } from './Lampe';
export class CommandeEteindreLampe implements Commande {

    lampe: Lampe;

    constructor(lampe: Lampe) {
        this.lampe = lampe;
    }

    executer() {
        return this.lampe.arret();
    }
}