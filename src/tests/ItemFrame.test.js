import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import ItemFrame from "../components/ItemFrame";
import { headArmorData } from "../components/data";

const data = headArmorData;

describe("Testing Item frame", () => {
  it("item frame default renders", () => {
    render(<ItemFrame />);
    const linkElement = screen.getByTestId("itemFrame");
    expect(linkElement).toBeInTheDocument();
  });
  it("item frame renders with ItemList", () => {
    render(<ItemFrame itemList={data} />);
    const linkElement = screen.getByTestId("itemFrame");
    expect(linkElement).toBeInTheDocument();
  });
  it("item frame renders item name", () => {
    render(<ItemFrame itemList={data} />);
    const firstItem = data[0];
    const itemLabel = screen.getByTestId("itemNameLabel");

    expect(itemLabel).toHaveTextContent(firstItem.name);
  });
  it("item frame renders item level", () => {
    render(<ItemFrame itemList={data} />);
    const firstItem = data[0];
    const itemLabel = screen.getByTestId("itemLightLabel");

    expect(itemLabel).toHaveTextContent(firstItem.light_level);
  });
  it("item frame renders item slot", () => {
    render(<ItemFrame itemList={data} />);
    const firstItem = data[0];
    const itemLabel = screen.getByTestId("itemSlotLabel");

    expect(itemLabel).toHaveTextContent(firstItem.armor_slot);
  });

  it("item grid isn't rendered by default", () => {
    render(<ItemFrame itemList={data} />);
    const itemCont = screen.getByTestId("itemContainer");
    const itemGrid = screen.queryByTestId("itemGrid");
    expect(itemGrid).toBeNull();
  });
  it("item grid renders when hovered", () => {
    render(<ItemFrame itemList={data} />);
    const itemFrame = screen.getByTestId("itemFrame");
    fireEvent.mouseOver(itemFrame);
    const grid = screen.getByTestId("itemGrid");
    expect(grid).toBeInTheDocument();
  });

  it("item grid hides when stop hovering item frame", () => {
    render(<ItemFrame itemList={data} />);
    const itemFrame = screen.getByTestId("itemFrame");
    const grid = screen.queryByTestId("itemGrid");
    fireEvent.mouseOver(itemFrame);
    fireEvent.mouseOut(itemFrame);
    expect(grid).toBeNull();
  });
});
