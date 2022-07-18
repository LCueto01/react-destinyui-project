import React from "react";
import { render, screen, fireEvent, userEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import ItemFrame from "../components/ItemFrame";

describe("Testing Item frame", () => {
  it("item frame renders", () => {
    render(<ItemFrame />);
    const linkElement = screen.getByTestId("itemFrame");
    expect(linkElement).toBeInTheDocument();
  });
  it("item grid isn't rendered by default", () => {
    render(<ItemFrame />);
    const itemCont = screen.getByTestId("itemContainer");
    const itemGrid = screen.queryByTestId("itemGrid");
    expect(itemGrid).toBeNull();
  });
  it("item grid renders when hovered", () => {
    render(<ItemFrame />);
    const itemFrame = screen.getByTestId("itemFrame");
    fireEvent.mouseOver(itemFrame);
    const grid = screen.getByTestId("itemGrid");
    expect(grid).toBeInTheDocument();
  });
});
