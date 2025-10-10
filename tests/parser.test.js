const Parser = require('../server/utils/parser');

describe('Parser', () => {
  test('parses valid string', () => {
    const msg = "100 usd to eur";
    const parsed = Parser.parse(msg);
    expect(parsed).toEqual({ amount: 100, from: "USD", to: "EUR" });
  });

  test('invalid format without "to"', () => {
    const msg = "100 usd eur";
    const parsed = Parser.parse(msg);
    expect(parsed).toBeNull();
  });

  test('non-numeric amount returns null', () => {
    const msg = "abc usd to eur";
    const parsed = Parser.parse(msg);
    expect(parsed).toBeNull();
  });

  test('wrong number of parts returns null', () => {
    const msg = "100 usd";
    const parsed = Parser.parse(msg);
    expect(parsed).toBeNull();
  });
});
