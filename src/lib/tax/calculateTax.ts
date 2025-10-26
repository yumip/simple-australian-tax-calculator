import { TAX_RATES, YEARS } from "./rate.const";

export function calculateTax(year: YEARS, income: number): number {
  if (!Number.isFinite(income) || income < 0) return 0;
  const rates = TAX_RATES[year];
  const bracket = rates.find(
    (rate) => income > rate.min && (rate.max === null || rate.max >= income),
  );
  if (!bracket) return 0;
  const tax = bracket.baseTax + bracket.rate * (income - bracket.min);
  return tax;
}
