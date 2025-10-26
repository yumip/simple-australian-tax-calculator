import { currencyFormatter } from "./util";
describe("currencyFormatter", () => {
  it("formats numbers as AUD", () => {
    expect(currencyFormatter(0)).toBe("$0.00");
    expect(currencyFormatter(123456)).toBe("$123,456.00");
    expect(currencyFormatter(1234.5)).toBe("$1,234.50");
  });
});
