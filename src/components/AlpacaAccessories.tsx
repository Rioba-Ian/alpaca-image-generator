import { createEffect, createSignal, For, onCleanup } from "solid-js";
import alpaca from "../lib/alpaca";
import { useStore } from "../store/alpaca";

export default function AlpacaAccessories() {
 const accessories = alpaca.map((item) => item);
 //background image
 const setBgImg = useStore((state) => state.setImage);
 // ears
 const setEarImg = useStore((state) => state.setEars);
 // eyes
 const setEyeImg = useStore((state) => state.setEyes);
 //hair
 const setHairImg = useStore((state) => state.setHair);
 // legs
 const setLegImg = useStore((state) => state.setLegs);
 const [labels] = createSignal(accessories);
 const [selectedAccessory, setSelectedAccessory] = createSignal<number>(0);
 const [styleLabels, setStyleLabels] = createSignal<
  { id: number; label: string; filepath: string }[]
 >([]);
 const [selectedStyle, setSelectedStyle] = createSignal<string>("default");

 createEffect(() => {
  setStyleLabels(
   accessories[selectedAccessory()].items.map((item) => {
    return { id: item.id, label: item.label, filepath: item.filename };
   })
  );

  const isStyleInPath = styleLabels().some(
   (item) => item.filepath === selectedStyle()
  );

  if (selectedAccessory() === 0) {
   if (!isStyleInPath) {
    setBgImg("default");
   } else {
    setBgImg(selectedStyle());
   }
   console.log(styleLabels(), selectedStyle());
  }

  if (selectedAccessory() === 1) {
   setEarImg(selectedStyle());
  }

  if (selectedAccessory() === 2) {
   setEyeImg(selectedStyle());
  }

  if (selectedAccessory() === 3) {
   setHairImg(selectedStyle());
  }

  if (selectedAccessory() === 4) {
   setLegImg(selectedStyle());
  }
  console.log(styleLabels());
 });

 return (
  <section>
   <div id="accessories">
    <h2 class="uppercase text-xl font-bold">Accessorize the Alpaca's</h2>
    <div
     id="accesorize-controls"
     class="w-3/5 flex items-center justify-start flex-wrap gap-4 my-4"
    >
     <For each={labels()}>
      {(label, _i) => (
       <button
        class="btn--toggles focus:bg-blue-900 focus:text-white"
        onClick={() => {
         setSelectedAccessory(label.id);
        }}
       >
        {label.label}
       </button>
      )}
     </For>
    </div>
   </div>
   <div id="styles">
    <h2 class="uppercase text-xl font-bold">style {selectedAccessory()}</h2>
    <div id="accessorize-styles" class="w-4/5 space-x-3 space-y-4">
     <For each={styleLabels()}>
      {(item, _id) => (
       <button
        class="btn--toggles focus:bg-blue-900 focus:text-white"
        onClick={() => setSelectedStyle(item.filepath)}
       >
        {item.label}
       </button>
      )}
     </For>
    </div>
   </div>
  </section>
 );
}
