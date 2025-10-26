import { Container, Typography } from "@mui/material";
import TaxCalculator from "./components/TaxCalculator";

export const revalidate = false;
export default function Home() {
  return (
    <div>
      <main>
        <Container maxWidth="md" sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Simple Australian Tax Calculator
          </Typography>
          <Typography variant="body1">
            Use this tool to estimate your income tax based on the latest tax
            brackets and rates for Australian residents. Simply enter your
            income details and let the calculator do the rest!
          </Typography>
          <TaxCalculator />
        </Container>
      </main>
    </div>
  );
}
