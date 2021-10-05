export default class Game {
  private rolls: number[] = [];

  public roll(pins: number) {
      if(pins < 0){
          throw new Error('negative numbers are not allowed')
      }
      if(pins > 10){
        throw new Error('to many pins. only 10 is allowed')
    }
    this.rolls.push(pins);
  }

  public score(): number {
    let points = 0;
    let firstInFrame = 0;
    for (let frame = 0; frame < 10; frame++) {
        if(this.isStrike(firstInFrame)){
            points += 10 + this.nextTwoBallsForStrike(firstInFrame);
            firstInFrame++;
        }
      else if (this.isSpare(firstInFrame)) {
        points += 10 + this.nextBallForSpare(firstInFrame);
        firstInFrame += 2;
      } else {
        points += this.twoBallsInFrame(firstInFrame);
        firstInFrame += 2;
      }
    }
    
    return points;
  }

  private twoBallsInFrame(firstInFrame: number): number{
      return this.rolls[firstInFrame] + this.rolls[firstInFrame + 1]
  }

  private nextBallForSpare(firstInFrame): number{
    return this.rolls[firstInFrame + 2]
  }

  private nextTwoBallsForStrike(firstInFrame): number{
    return this.rolls[firstInFrame+1] + this.rolls[firstInFrame +2]
  }

  private isStrike(firstInFrame: number): boolean{
    return this.rolls[firstInFrame] == 10;
  }

  private isSpare(firstInFrame: number): boolean {
    return this.rolls[firstInFrame] + this.rolls[firstInFrame + 1] == 10;
  }
}
