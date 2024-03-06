import { createStore } from "solid-js/store";
import { AlpacaAccessoriesState } from "./alpaca";

export const [alpaca, setAlpaca] = createStore({
 accessory: "string",
 item: "string",
});

export const accessor = alpaca;
