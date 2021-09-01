import { CommandeEteindreLampe } from './CommandeEteindreLampe';
import { CommandeAllumerLampe } from './CommandeAllumerLampe';
import { Lampe } from './Lampe';
import { TelecommandeSimple } from './TelecommandeSimple';

export class App {

    static main() {
        const telecmd = new TelecommandeSimple();

        const lampeSejour = new Lampe("sejour");
        const lampeCuisine = new Lampe("cuisine");
        const lampeSejourAllumer = new CommandeAllumerLampe(lampeSejour);
        const lampeSejourEteindre = new CommandeEteindreLampe(lampeSejour);

        telecmd.setCommande(0, lampeSejourAllumer, lampeSejourEteindre);
        // console.log(telecmd);
        return telecmd.boutonMarchePresse(0);
        // return telecmd.boutonArretPresse(0);

    }
}

// const app = new App();
// App.main()
