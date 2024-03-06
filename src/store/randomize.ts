import { createStore } from "solid-js/store";

export const [alpaca, setAlpaca] = createStore({
 accessory: "string",
 item: "string",
});

export const accessor = alpaca;
