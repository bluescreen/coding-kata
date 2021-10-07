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

    describe('Create Board', () => {
        it('should create and render a board of dead cells', () => {
            const board = new Board(4,8);
            expect(board.rows).toBe(4);
            expect(board.columns).toBe(8);
            expect(board.numCells).toEqual(4*8);
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
                '........\n'+
                '....*...\n'+
                '...**...\n'+
                '........\n');
        })

        
    })

    describe('Find cell nighbours', () => {
        it('should find 3 neighbours for first cell', () => {
            const board = new Board(3,3);
            const neighbours = board.findNeighbours(1);
            expect(neighbours.length).toEqual(3);
        })

        it('should find 5 neighbours for second cell', () => {
            const board = new Board(3,3);
            const neighbours = board.findNeighbours(2);
            expect(neighbours.length).toEqual(5);
        })

        it('should find 8 neighbours for center cell', () => {
            const board = new Board(3,3);
            const neighbours = board.findNeighbours(5);
            expect(neighbours.length).toEqual(8);
        })


        it('should find 3 neighbours for last cell', () => {
            const board = new Board(3,3);
            const neighbours = board.findNeighbours(9);
            expect(neighbours.length).toEqual(3);
        })

        it('should find coords for index', () => {
            const board = new Board(3,3);
            const coords = board.findCoordsFor(9);
            expect(coords.col).toBe(3);
            expect(coords.row).toBe(3);            
        }) 

        it('should find number of living neighbours from edge', () => {
            const board = new Board(3,3);
            board.setState(
                '.*.'+
                '**.'+
                '...');
            const numAlive = board.findLivingNeighbours(1);
            expect(numAlive).toEqual(3);
        })

        it('should find number of living neighbours from center 2', () => {
            const board = new Board(3,6);
            board.setState(
                '...***'+
                '...*.*'+
                '...***');
            const numAlive = board.findLivingNeighbours(11);
            expect(numAlive).toEqual(8);
        })

        it('should find number of living neighbours from center', () => {
            const board = new Board(3,3);
            board.setState(
                '***'+
                '*.*'+
                '***');
            const numAlive = board.findLivingNeighbours(5);
            expect(numAlive).toEqual(8);
        })
    })


    describe('Run game of life', () => {

        it('should update simple 3x3 board', () => {
            const board = new Board(3,3);
            board.setState(
                '**.'+
                '*..'+
                '...');

            console.log(board.render());

                
            board.update();

            console.log(board.render());
        })

        it('should run one round', () => {

            const state = '............*......**...........';
            const board = new Board(4,8);
            board.setState(state);


            console.log(board.render());
            
            expect(board.findLivingNeighbours(12)).toBe(3);
            board.update();

            const out = board.render();

            console.log(board.render());
            
            expect(out).toEqual(
                '........\n'+
                '...**...\n'+
                '...**...\n'+
                '........\n');
        })
    })

});