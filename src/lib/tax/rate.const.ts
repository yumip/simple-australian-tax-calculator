export type YEARS = "2025-26" | "2024-25" | "2023-24";
export const AVAILABLE_YEARS: YEARS[] = ["2025-26", "2024-25", "2023-24"];

export interface TaxRate {
  min: number;
  max: number | null;
  rate: number;
  baseTax: number;
}

export const TAX_RATES: Record<YEARS, TaxRate[]> = {
  "2023-24": [
    { min: 0, max: 18200, rate: 0, baseTax: 0 },
    { min: 18200, max: 45000, rate: 0.19, baseTax: 0 },
    { min: 45000, max: 120000, rate: 0.325, baseTax: 5092 },
    { min: 120000, max: 180000, rate: 0.37, baseTax: 29467 },
    { min: 180000, max: null, rate: 0.45, baseTax: 51667 },
  ],
  "2024-25": [
    { min: 0, max: 18200, rate: 0, baseTax: 0 },
    { min: 18200, max: 45000, rate: 0.16, baseTax: 0 },
    { min: 45000, max: 135000, rate: 0.3, baseTax: 4288 },
    { min: 135000, max: 190000, rate: 0.37, baseTax: 31288 },
    { min: 190000, max: null, rate: 0.45, baseTax: 51638 },
  ],
  "2025-26": [
    { min: 0, max: 18200, rate: 0, baseTax: 0 },
    { min: 18200, max: 45000, rate: 0.16, baseTax: 0 },
    { min: 45000, max: 135000, rate: 0.3, baseTax: 4288 },
    { min: 135000, max: 190000, rate: 0.37, baseTax: 31288 },
    { min: 190000, max: null, rate: 0.45, baseTax: 51638 },
  ],
};
