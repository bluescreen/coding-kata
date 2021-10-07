// Für Vielfache von 3 gibt „Fizz“ aus.
// Für Vielfache von 5 gib „Buzz“ aus.
// Für Vielfache von 3 und 5 gib „FizzBuzz“ aus.
// Beispiel Ausgabe
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

import { GameOfLife } from "./gameOfLife/game";

//import { fizzBuzz } from './fizzBuzz/version1';

/*
const main = () => {
  process.stdout.write('Run fizz buzz\n');
  for (let i = 1; i < 100; i++) {
    process.stdout.write(fizzBuzz(i) + ', ');
  }
};
main();*/

const game = new GameOfLife();
game.run();
