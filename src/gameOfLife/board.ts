import Cell from "./cell";
import { CellState } from "./cellState";

export default class Board{
    private cells:Cell[]  = [];

    constructor(public rows: number, public columns: number){
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < columns; col++){
                this.cells[row + col] = new Cell(CellState.DEAD);
            }
        }
    }

    public setState(state: string): void {
        const states:string[] = state.split(/ /);
        for(let col=0;col < states.length; col++){
            
            this.cells[i].state = states[i] === '.' ? CellState.DEAD : CellState.ALIVE
        }
    }

    public render(){
        let output: string = '';
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.columns; col++){
                output += this.cells[row + col].render();
            }
            output += '\n';
        }
        return output;
    }
}