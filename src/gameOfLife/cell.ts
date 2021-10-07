import { CellState } from "./cellState";

export default class Cell{


    constructor(public state: CellState){};

    public tick(neighbours: number){
        this.state = neighbours < 2 || neighbours > 3 ? CellState.DEAD : CellState.ALIVE
        return this.state;
    }

    render(){
        return this.state === CellState.DEAD ? '.' : '*';
    }
}