import Board from "./board";

export class GameOfLife{
    board: Board;
    generation: number = 0;

    constructor(){
        this.board = new Board(4,8);
        this.board.setState('............*......**...........');
    }

    run(){
       this.step();
    }

    step(){
        setTimeout(()=>{
            console.clear();
            this.board.update();
            console.log('Convay´s Game of Life');
            console.log('---------------------')
            console.log('Gen: ', this.generation);
            this.board.update();
            console.log(this.board.render());
            this.generation++;
            this.step();
        },2000)
    }
}

