import { Lampe } from './Lampe';
export class CommandeAllumerLampe implements Commande {

    lampe: Lampe;

    constructor(lampe: Lampe) {
        this.lampe = lampe;
    }

    executer() {
        return this.lampe.marche();
    }
}