import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders a semantic product story", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("One decisive idea");
    expect(screen.getByRole("link", { name: "Explore the proof" })).toHaveAttribute("href", "#evidence");
  });
});
