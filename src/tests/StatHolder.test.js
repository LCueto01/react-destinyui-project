import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import StatHolder from "../components/StatHolder";
import { headArmorData } from "../components/data";

let data = headArmorData;

describe("Stat holder testing", () => {
  it("stats container default renders", () => {
    render(<StatHolder />);
    const statElement = screen.getByTestId("statsContainer");
    expect(statElement).toBeInTheDocument();
  });

  it("stats container renders with items", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("statsContainer");
    expect(statElement).toBeInTheDocument();
  });

  it("mobility holder renders", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("mobilityHolder");
    expect(statElement).toBeInTheDocument();
  });
  it("resilience holder renders", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("resHolder");
    expect(statElement).toBeInTheDocument();
  });
  it("recovery holder renders", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("recoveryHolder");
    expect(statElement).toBeInTheDocument();
  });
  it("discipline holder renders", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("discHolder");
    expect(statElement).toBeInTheDocument();
  });
  it("intellect holder renders", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("intHolder");
    expect(statElement).toBeInTheDocument();
  });
  it("strength holder renders", () => {
    render(<StatHolder armorList={data} />);
    const statElement = screen.getByTestId("strengthHolder");
    expect(statElement).toBeInTheDocument();
  });
});
