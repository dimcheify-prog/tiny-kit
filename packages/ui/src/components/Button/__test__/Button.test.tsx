import {expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {Button} from "@/components/Button";
// TODO fix temp solution
import '@testing-library/jest-dom/vitest';

test("render Button component", () => {
  render(<Button>ButtonComponent</Button>);
  expect(screen.getByText("ButtonComponent")).toBeInTheDocument()
})