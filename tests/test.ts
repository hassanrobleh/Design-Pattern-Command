import { App } from './../src/classes/App';

describe('test', () => {
    it("Pattern commande", ()=> {
        expect(App.main()).toBe("Lampe allumée");
    })
})
