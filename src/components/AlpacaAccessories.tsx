import { createEffect, createSignal, For } from "solid-js";
import alpaca from "../lib/alpaca";
import { useStore } from "../store/alpaca";

export default function AlpacaAccessories() {
 const accessories = alpaca.map((item) => item);
 // set specific accessory
 const setAccessory = useStore((state) => state.setAccessory);
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
    setAccessory("image", "default");
   } else {
    setAccessory("image", selectedStyle());
   }
  }

  if (selectedAccessory() === 1) {
   if (!isStyleInPath) {
    setAccessory("ears", "default");
   } else {
    setAccessory("ears", selectedStyle());
   }
  }

  if (selectedAccessory() === 2) {
   if (!isStyleInPath) {
    setAccessory("eyes", "default");
   } else {
    setAccessory("eyes", selectedStyle());
   }
  }

  if (selectedAccessory() === 3) {
   if (!isStyleInPath) {
    setAccessory("hair", "default");
   } else {
    setAccessory("hair", selectedStyle());
   }
  }

  if (selectedAccessory() === 4) {
   if (!isStyleInPath) {
    setAccessory("leg", "default");
   } else {
    setAccessory("leg", selectedStyle());
   }
  }

  if (selectedAccessory() === 5) {
   if (!isStyleInPath) {
    setAccessory("mouth", "default");
   } else {
    setAccessory("mouth", selectedStyle());
   }
  }

  if (selectedAccessory() === 6) {
   if (!isStyleInPath) {
    setAccessory("neck", "default");
   } else {
    setAccessory("neck", selectedStyle());
   }
  }

  if (selectedAccessory() === 7) {
   if (!isStyleInPath) {
    setAccessory("accessory", "headphone");
   } else if (selectedStyle() === "default") {
    setAccessory("accessory", "headphone");
   } else {
    setAccessory("accessory", selectedStyle());
   }
  }

  setAccessory("nose", "nose");
 });

 return (
  <section class="mt-14 md:mt-0">
   <div id="accessories">
    <h2 class="uppercase text-sm md:text-xl font-bold">
     Accessorize the Alpaca's
    </h2>
    <div
     id="accesorize-controls"
     class="md:w-4/5 flex items-center justify-start flex-wrap gap-1 md:gap-4 my-4"
    >
     <For each={labels()}>
      {(label, _i) => (
       <button
        class="btn--toggles focus:bg-[#FFB86C] focus:text-white"
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
    <h2 class="uppercase text-sm md:text-xl font-bold">style </h2>
    <div
     id="accessorize-styles"
     class="md:w-4/5 space-x-1 md:space-x-3 space-y-4"
    >
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
