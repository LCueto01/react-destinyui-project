import { action,debug } from "easy-peasy";
import { headArmorData } from "./data";

export const model = {
  name: "vault",
  count: 1,
  items: headArmorData,
  requestedItem: {},
  addToVault: action((state, payload) => {
    state.items.push(payload);
  }),
  increment: action((state,payload) => {
    const idk = state.count+= 1
    state.count = idk
    console.log(debug(state.count));
  }),
  getFromVault: action((state,number) =>{
    let foundItem = state.items.find(element => element.id === number)
    state.requestedItem = foundItem
    return "hello"
  })
};
