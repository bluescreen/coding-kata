import { CellState } from "./cellState";

export default class Cell{


    constructor(public state: CellState){};

    public tick(_neighbours: number){
        return CellState.DEAD
    }

    

}