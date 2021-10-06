import Game from '../src/bowlingGame/game'

/*
Bowling Regeln:
- Es werden jeweils 10 Wiederholungen gebowlt
- Es wird 2x mal pro Runde gebowlt
- Gutter game: Wenn alle Kugeln daneben gehen ist die Summe 0
- Ones: Wenn alle Kugeln nur einen Kegel treffen ist die Summe 20
- Spare: Wenn eine Kugel einen Teil und die andere den Rest wegräumt ist die Summe 10 + die nächste Kugel x 2
- Strike: Wenn eine Kugel alle abräumt ist die Summe 10 + die nächsten 2 Versuche x 2
- Perfekt: Wenn in allen Runden ein Strike also 10 geworfen wird ist die Summe 300
*/
describe('Bowling game kata', () => {

    let game: Game;

    const rollMany = (times: number, pins: number) => {
        for(let i=0; i < times; i++){
            game.roll(pins);
        }
    }

    const rollSpare = () => {
        game.roll(5);
        game.roll(5);
    }
    const rollStrike = () => {
        game.roll(10);

    }


    beforeEach(()=> {
        game = new Game();
    })

    it('can roll', ()=> {
        game.roll(0);
    })

    it('canot roll a negative', ()=> {
        expect(()=>game.roll(-1)).toThrowError(/negative/);
    })

    it('canot roll more than 10 pins', ()=> {
        expect(()=>game.roll(11)).toThrowError(/many/);
    })

    it('should roll gutter game', () => {
        rollMany(20,0);
        expect(game.score()).toBe(0);
    })

    it('should roll all ones', () => {
        rollMany(20,1);
        expect(game.score()).toBe(20);
    })

    it('should roll a spare', () => {
        rollSpare();
        game.roll(3);
        rollMany(17,0);
        expect(game.score()).toBe(5+5+3+3); 
    })

    it('should roll a strike', () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16,0);
        expect(game.score()).toBe(10+7+7);
    })

    it('should roll a perfect game', () => {
        rollMany(12,10);
        expect(game.score()).toBe(300);
    })

    
})