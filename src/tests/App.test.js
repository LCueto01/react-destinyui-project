import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import StatHolder from "../components/StatHolder";

let data = [
  {
    id: 4,
    light_level: 1498,
    name: "Faded",
    description: "Duis at velit eu est congue elementum.",
    armor_slot: "head",
    rarity: "rare",
    mobility: 22,
    intellect: 67,
    resilience: 19,
    recovery: 21,
    strength: 20,
    discipline: 91,
  },
  {
    id: 6,
    light_level: 1507,
    name: "Sub-Ex",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    armor_slot: "head",
    rarity: "rare",
    mobility: 62,
    intellect: 86,
    resilience: 54,
    recovery: 77,
    strength: 64,
    discipline: 67,
  },
  {
    id: 8,
    light_level: 1410,
    name: "Toughjoyfax",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    armor_slot: "head",
    rarity: "rare",
    mobility: 74,
    intellect: 51,
    resilience: 63,
    recovery: 88,
    strength: 30,
    discipline: 60,
  },
  {
    id: 11,
    light_level: 1485,
    name: "Asoka",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    armor_slot: "head",
    rarity: "exotic",
    mobility: 52,
    intellect: 80,
    resilience: 80,
    recovery: 86,
    strength: 37,
    discipline: 65,
  },
  {
    id: 18,
    light_level: 1539,
    name: "Temp",
    description:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    armor_slot: "head",
    rarity: "legendary",
    mobility: 51,
    intellect: 45,
    resilience: 98,
    recovery: 61,
    strength: 21,
    discipline: 34,
  },
  {
    id: 7,
    light_level: 1564,
    name: "Fixflex",
    description:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    armor_slot: "chest",
    rarity: "uncommon",
    mobility: 64,
    intellect: 19,
    resilience: 93,
    recovery: 33,
    strength: 19,
    discipline: 69,
  },
];

describe("renders learn react link", () => {
  it("works", () => {
    render(<StatHolder armorList={data} />);
    const linkElement = screen.getByText(/strength/);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("renders leaarn react link", () => {
  it("works", () => {
    render(<StatHolder />);
    const linkElement = screen.getByText(/strength/);
    expect(linkElement).toBeInTheDocument();
  });
});
