/*
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.*/

import Cell from "../src/gameOfLife/cell";
import { CellState } from "../src/gameOfLife/cellState";

describe('Convays game of life', ()=>{

    describe('Cell State', ()=> {
        it('can create a living cell', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.state).toBe(1);
        });
    
        it('can create a dead cell', () => {
            const cell = new Cell(CellState.DEAD);
            expect(cell.state).toBe(0);
        });
    });
   
    describe('Cell Behavior', ()=> {

        it('should kill a cell with less than 2 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(1)).toBe(CellState.DEAD);
        });

        it('should stay alive with 2 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(2)).toBe(CellState.ALIVE);
        });

        it('should kill a cell with more than 3 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(4)).toBe(CellState.DEAD);
        });
    });

});