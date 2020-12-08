const { romanNumerals } = require("../proj/RomanNumerals");


describe("test", () => {
  test("Trun number 1903", () => {
    expect(romanNumerals("MCMIII")).toBe(1903);
  });
  test("Trun number 14", () => {
    expect(romanNumerals("XIV")).toBe(14);
  });
  test("Trun number 13", () => {
    expect(romanNumerals("XIII")).toBe(13);
  });
  test("Trun number 1666", () => {
    expect(romanNumerals("MDCLXVI")).toBe(1666);
  });
  test("Trun number 2008", () => {
    expect(romanNumerals("MMVIII")).toBe(2008);
  });
  test("Trun number 3444", () => {
    expect(romanNumerals("MMMCDXLIV")).toBe(3444);
  });
  test("Trun number 3999", () => {
    expect(romanNumerals("MMMCMXCIX")).toBe(3999);
  });
  test("Trun number 3499", () => {
    expect(romanNumerals("MMMCDXCIX")).toBe(3499);
  });
  test("Trun number 3449", () => {
    expect(romanNumerals("MMMCDXLIX")).toBe(3449);
  });
})
