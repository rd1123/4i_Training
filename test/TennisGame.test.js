const { TennisGame } = require("../proj/TennisGame");
const game = new TennisGame();

describe("Test Tennis Game", () => {
  let actual, expected;

  test("Given no one won point result score is Love-All", () => {
    actual = game.getScore();
    expected = "Love-All";

    expect(actual).toBe(expected);
  });

  test("Given Player1 win first point result score is Fifteen-Love", () => {
    game.resetPoint();
    game.winPoint("Player1");

    actual = game.getScore();
    expected = "Fifteen-Love";

    expect(actual).toBe(expected);
  });

  test("Given P2 won first point then result is Love-Fifteen", () => {
    game.resetPoint();
    game.winPoint("Player2");

    actual = game.getScore();
    expected = "Love-Fifteen";

    expect(actual).toBe(expected);
  });

  test("Given Player1 and Player2 win first point both result score is Fifteen-All", () => {
    game.resetPoint();
    game.winPoint("Player1");
    game.winPoint("Player2");

    actual = game.getScore();
    expected = "Fifteen-All";

    expect(actual).toBe(expected);
  });

  test("Given Player1 win 2 point and Player2 not get point yet result score is Thirty-Love", () => {
    game.resetPoint();
    game.winPoint("Player1");
    game.winPoint("Player1");

    actual = game.getScore();
    expected = "Thirty-Love";

    expect(actual).toBe(expected);
  });

  test("Given Player1 not get point and Player2 win 2 point result score is Love-Thirty", () => {
    game.resetPoint();
    game.winPoint("Player2");
    game.winPoint("Player2");

    actual = game.getScore();
    expected = "Love-Thirty";

    expect(actual).toBe(expected);
  });

  test("Given Player1 win 2 point and Player2 win 1 point result score is Thirty-Fifteen", () => {
    game.resetPoint();
    game.winPoint("Player1");
    game.winPoint("Player1");
    game.winPoint("Player2");

    actual = game.getScore();
    expected = "Thirty-Fifteen";

    expect(actual).toBe(expected);
  });

  test("Given Player1 win 1 point and Player2 win 2 point result score is Fifteen-Thirty", () => {
    game.resetPoint();
    game.winPoint("Player1");
    game.winPoint("Player2");
    game.winPoint("Player2");

    actual = game.getScore();
    expected = "Fifteen-Thirty";

    expect(actual).toBe(expected);
  });

  test("Given Player1 and Player2 both win 2point result score is Deuce", () => {
    game.resetPoint();
    game.winPoint("Player1");
    game.winPoint("Player1");
    game.winPoint("Player2");
    game.winPoint("Player2");

    actual = game.getScore();
    expected = "Deuce";
  });
})