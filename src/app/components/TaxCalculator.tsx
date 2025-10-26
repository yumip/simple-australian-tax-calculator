"use client";
import { calculateTax } from "@/src/lib/tax/calculateTax";
import { AVAILABLE_YEARS, YEARS } from "@/src/lib/tax/rate.const";
import { currencyFormatter } from "@/src/lib/util";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function TaxCalculator() {
  const [year, setYear] = useState<YEARS>("2024-25");
  const [income, setIncome] = useState(0);
  const [result, setResult] = useState("$0.00");

  const handleSelect = (event: SelectChangeEvent) => {
    setYear(event.target.value as YEARS);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(event.target.value);
    if (input >= 0) {
      setIncome(input);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tax = currencyFormatter(calculateTax(year, income));
    setResult(tax);
  };

  return (
    <Paper sx={{ p: 4, mt: 4 }} elevation={3}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
        onSubmit={onSubmit}
      >
        <FormControl fullWidth>
          <InputLabel id="income-year">Income Year</InputLabel>
          <Select
            labelId="income-year"
            id="income-select"
            value={year}
            label="Income Year"
            onChange={handleSelect}
          >
            {AVAILABLE_YEARS.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="taxable-income">Taxable Income</InputLabel>
          <Input
            id="taxable-income"
            data-testid="taxable-income"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            inputProps={{ inputMode: "decimal", pattern: "[0-9]*" }}
            value={income}
            onChange={handleChange}
            aria-label="Taxable Income"
          />
        </FormControl>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Calculate
        </Button>
      </Box>

      <Divider sx={{ my: 4 }}>
        {" "}
        <Typography variant="h6">Result</Typography>{" "}
      </Divider>

      <Box textAlign="center">
        <Card>
          {" "}
          <Typography variant="body1">{`The estimated tax on your taxable income is ${result}`}</Typography>{" "}
        </Card>
      </Box>
    </Paper>
  );
}
