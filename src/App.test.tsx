import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("should have Perfume title ", () => {
	render(<App />);
	const message = screen.queryByText(/Gabrielle Essence Eau De Parfum/);
	expect(message).toBeVisible();
});

it("should have button hover affect", () => {
	render(<App />);
	const button = screen.getByRole("button", { name: /add to cart/i });
	expect(button.matches(":hover")).toBe(false);
	fireEvent.mouseOver(button);
	expect(button.matches(":hover")).toBe(true);
	fireEvent.mouseOut(button);
	expect(button.matches(":hover")).toBe(false);
});
