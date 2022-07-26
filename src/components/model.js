import { action, debug } from "easy-peasy";
import { vaultArmor } from "./armordest";

export const model = {
  name: "vault",
  count: 1,
  items: vaultArmor,
  requestedItem: {},
  addToVault: action((state, payload) => {
    state.items.push(payload);
  }),
  increment: action((state, payload) => {
    const idk = (state.count += 1);
    state.count = idk;
    console.log(debug(state.count));
  }),
  getFromVault: action((state, number) => {
    state.requestedItem = {};
    let foundItem = state.items.find((element) => element.id === number);
    state.requestedItem = foundItem;
    console.log(debug(state.requestedItem));
  }),
};
