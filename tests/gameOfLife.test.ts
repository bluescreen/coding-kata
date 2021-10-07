/*
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.*/

import Board from "../src/gameOfLife/board";
import Cell from "../src/gameOfLife/cell";
import { CellState } from "../src/gameOfLife/cellState";

describe('Convays game of life', ()=>{

    describe('Cell State', ()=> {
        it('can create and render a living cell', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.state).toBe(1);
            expect(cell.render()).toBe('*');
        });
    
        it('can create and render a dead cell', () => {
            const cell = new Cell(CellState.DEAD);
            expect(cell.state).toBe(0);
            expect(cell.render()).toBe('.');

        });
    });
   
    describe('Cell Behavior', ()=> {

        it('should kill a cell with less than 2 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(1)).toBe(CellState.DEAD);
        });

        

        it('should kill a cell with more than 3 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(4)).toBe(CellState.DEAD);
        });


        it('should stay alive with 2 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(2)).toBe(CellState.ALIVE);
        });
        
        it('should stay alive with 3 neighbours', () => {
            const cell = new Cell(CellState.ALIVE);
            expect(cell.tick(3)).toBe(CellState.ALIVE);
        });

        it('should revive if cell has 3 alive neighbours', () => {
            const cell = new Cell(CellState.DEAD);
            expect(cell.tick(3)).toBe(CellState.ALIVE);
        });
    });

    describe('Board', () => {
        it('should create a board of dead cells', () => {
            const board = new Board(4,8);
            expect(board.rows).toBe(4);
            expect(board.columns).toBe(8);
            expect(board.render()).toEqual(
            '........\n'+
            '........\n'+
            '........\n'+
            '........\n');
        })

        it('should parse a preset board', () => {
            const state = '............*......**...........';
            const board = new Board(4,8);
            board.setState(state);

            expect(board.render()).toEqual(
                '........'+
                '....*...'+
                '...**...'+
                '........');
        })
    })

});