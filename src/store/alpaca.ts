import { createWithSignal } from "solid-zustand";

export type AlpacaAccessoriesState = {
 image: string;
 ears: string;
 eyes: string;
 hair: string;
 leg: string;
 mouth: string;
 neck: string;
 nose: string;
 accessory: string;
};

type AlpacaMethods = {
 setAccessory: (
  accessory: keyof AlpacaAccessoriesState,
  newValue: string
 ) => void;
};

type AlpacaState = AlpacaAccessoriesState & AlpacaMethods;

export const useStore = createWithSignal<AlpacaState>((set) => ({
 image: "default",
 ears: "default",
 eyes: "default",
 leg: "default",
 hair: "default",
 mouth: "default",
 neck: "default",
 nose: "default",
 accessory: "",
 setAccessory: (accessory, newValue) =>
  set((_state) => ({ [accessory]: newValue })),
}));

// accessor

export const accessor = useStore();
