export class TelecommandeSimple {

    commandeMarche : Commande[] =  [];
    commandeArret : Commande[] = [];

    // constructor(cm: Commande[], ca: Commande[] ) {
    //     this.commandeMarche = cm;
    //     this.commandeArret = ca;
    // }

    setCommande(empt: number, comMrche: Commande, comArret: Commande): void {
        this.commandeMarche[empt] = comMrche;
        this.commandeArret[empt] = comArret;
    }

    boutonMarchePresse(empt: number): any {
        return this.commandeMarche[empt].executer();
    }

    boutonArretPresse(empt: number): any {
        return this.commandeArret[empt].executer();
    }

    toString(): string {

        const buffer: String[] = [];
        buffer.push("n------ Télécommande -------\n");
        for (let i = 0; i < this.commandeMarche.length; i++) {
            buffer.push("[empt " + i + "]" + this.commandeMarche[i] + " " + this.commandeArret[i] + "\n");
        }

        return buffer.toString();
    }

}