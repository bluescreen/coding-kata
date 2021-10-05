import Game from '../src/bowlingGame/game'



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
        expect(game.score()).toBe(16);
    })

    it('should roll a strike', () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16,0);
        expect(game.score()).toBe(24);
    })

    it('should roll a perfect game', () => {
        rollMany(12,10);
        expect(game.score()).toBe(300);
    })

    
})