let player1Point = 0;
let player2Point = 0;
export class TennisGame {
  constructor() { }

  resetPoint() {
    player1Point = 0;
    player2Point = 0;
  }

  winPoint(player) {
    switch (player) {
      case "Player1":
        player1Point += 15;
        break;
      case "Player2":
        player2Point += 15;
        break;
      default:
        console.log(`${player} is invalid !`);
        break;
    }
  }

  getScore() {
    if (player1Point === 0 && player2Point === 0) {
      return "Love-All";
    }
    if (player1Point === 15 && player2Point === 0) {
      return "Fifteen-Love";
    }
    if (player1Point === 0 && player2Point === 15) {
      return "Love-Fifteen";
    }
    if (player1Point === 15 && player2Point === 15) {
      return "Fifteen-All";
    }
    if (player1Point === 30 && player2Point === 0) {
      return "Thirty-Love";
    }
    if (player1Point === 0 && player2Point === 30) {
      return "Love-Thirty";
    }
    if (player1Point === 30 && player2Point === 15) {
      return "Thirty-Fifteen";
    }
    if (player1Point === 15 && player2Point === 30) {
      return "Fifteen-Thirty";
    }
    return "Deuce";
  }
};

const game = new TennisGame();
game.winPoint("Player1");
console.log(game.getScore());