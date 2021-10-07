import Cell from "./cell";
import { CellState } from "./cellState";

export default class Board{
    private cells:Cell[]  = [];

    constructor(public rows: number, public columns: number){
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < columns; col++){
                this.cells[this.columns * row + col] = new Cell(CellState.DEAD);
            }
        }
    }

    get numCells(){
        return this.cells.length
    }

    setState(state: string): void {
        const states:string[] = state.split('');
        for(let i = 0;i < states.length; i++){ 
            this.cells[i].state = states[i] === '.' ? CellState.DEAD : CellState.ALIVE
        }
    }

    findCoordsFor(index){
        const row = index / this.columns === 0 ? this.columns : Math.ceil(index / this.columns);
        const col = index % this.columns === 0 ? this.columns : Math.ceil(index % this.columns); 

        return {row,col};
    }

    findNeighbours(index: number): Cell[]{
        const neighbours = [];
        const coords = this.findCoordsFor(index);
        const col = coords.col-1;
        const row = coords.row-1; 



        var rowLimit = this.rows-1;
        var columnLimit = this.columns-1;

        for(let y = Math.max(0, col-1); y <= Math.min(col+1, columnLimit); y++) {
            for(let x = Math.max(0, row-1); x <= Math.min(row+1, rowLimit); x++) {
                if(x !== col|| y !== row) {
                    //console.log('Neighbour',x,y,this.columns * x + y);
                    neighbours.push(this.cells[this.columns * x + y]);
                }
            }
        }

        return neighbours;
    }

    findLivingNeighbours(index){
        return this.findNeighbours(index).filter((cell: Cell) => cell.state === CellState.ALIVE).length;
    }

    update(){
        const updated = [...this.cells];
        for(let i = 0;i < updated.length; i++){
            const numAlive = this.findLivingNeighbours(i);
            //console.log(i, numAlive, this.findCoordsFor(i));
            updated[i].tick(numAlive);
        }
        this.cells = updated;
    }

    render(){
        let output: string = '';
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.columns; col++){
                output += this.cells[this.columns *  row + col].render();
            }
            output += '\n';
        }
        return output;
    }
}