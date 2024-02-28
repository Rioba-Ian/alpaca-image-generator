import { createWithSignal } from "solid-zustand";

interface AlpacaState {
 image: string;
 ears: string;
 eyes: string;
 hair: string;
 leg: string;
 mouth: string;
 neck: string;
 setEars: (newEar: string) => void;
 setMouth: (newMouth: string) => void;
 setNeck: (newNeck: string) => void;
 setLegs: (newLeg: string) => void;
 setEyes: (newEye: string) => void;
 setHair: (newHair: string) => void;
 setImage: (newImage: string) => void;
}

export const useStore = createWithSignal<AlpacaState>((set) => ({
 image: "default",
 ears: "default",
 eyes: "default",
 leg: "default",
 hair: "default",
 mouth: "default",
 neck: "default",
 setEars: (newEar) => set((_state) => ({ ears: newEar })),
 setMouth: (newMouth) => set((_state) => ({ mouth: newMouth })),
 setNeck: (newNeck) => set((_state) => ({ neck: newNeck })),
 setLegs: (newLeg) => set((_state) => ({ leg: newLeg })),
 setHair: (newHair) => set((_state) => ({ hair: newHair })),
 setEyes: (newEye) => set((_state) => ({ eyes: newEye })),
 setImage: (newImage) => set((_state) => ({ image: newImage })),
}));
