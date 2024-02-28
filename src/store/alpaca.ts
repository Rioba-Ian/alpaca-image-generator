import { createWithSignal } from "solid-zustand";

interface AlpacaState {
 image: string;
 setImage: (newImage: string) => void;
}

export const useStore = createWithSignal<AlpacaState>((set) => ({
 image: "default",
 setImage: (newImage) => set((_state) => ({ image: newImage })),
}));
