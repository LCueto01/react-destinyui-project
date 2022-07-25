import React from "react";
import { applyMiddleware } from "redux";
import { StoreProvider, createStore} from "easy-peasy";
import { model } from "./model";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import VaultItem from "./VaultItem";


import { headArmorData } from "./data";

const storeModel = createStore(model)

const store = createStore(storeModel, composeWithDevTools(applyMiddleware(logger)));

const Vault = () => {
  return (
   
      <StoreProvider store={storeModel}>
        <h1>hello from vault</h1>
        <VaultItem />
      </StoreProvider>
  
  );
};

export default Vault;
