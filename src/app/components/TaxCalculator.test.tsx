import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaxCalculator from "./TaxCalculator";

describe("TaxCalculator", () => {
  it("calculate on submit", async () => {
    const user = userEvent.setup();
    render(<TaxCalculator />);

    await user.click(screen.getByLabelText("Income Year"));
    const listbox = await screen.findByRole("listbox");
    await user.click(within(listbox).getByRole("option", { name: "2024-25" }));
    const incomeInput = screen.getByTestId("taxable-income");
    await user.type(incomeInput, "125000");

    await user.click(screen.getByRole("button", { name: "Calculate" }));

    expect(
      screen.getByText(
        "The estimated tax on your taxable income is $28,288.00",
      ),
    ).toBeInTheDocument();
  });
});
