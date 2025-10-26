import { calculateTax } from "./calculateTax";

describe("calculateTax", () => {
  it("returns $0.00 for invalid or negative number", () => {
    expect(calculateTax("2024-25", NaN)).toBe(0);
    expect(calculateTax("2024-25", -100)).toBe(0);
    expect(calculateTax("2024-25", Infinity)).toBe(0);
  });
  it("handles bounderies using 2025-26", () => {
    expect(calculateTax("2025-26", 18200)).toBe(0);
    expect(calculateTax("2025-26", 45000)).toBe(4288);
    expect(calculateTax("2025-26", 135000)).toBe(31288);
    expect(calculateTax("2025-26", 190000)).toBe(51638);
  });
  it("lowest bracket example (2025-2026, 12000)", () => {
    expect(calculateTax("2025-26", 12000)).toBe(0);
  });
  it("second lowest bracket example (2024-2025, 96500)", () => {
    expect(calculateTax("2024-25", 96500)).toBe(19738);
  });
  it("third bracket example (2024-2025, 125000)", () => {
    expect(calculateTax("2024-25", 125000)).toBe(28288);
  });
  it("highest bracket example (2024-2025, 200000)", () => {
    expect(calculateTax("2024-25", 200000)).toBe(56138);
  });
});
