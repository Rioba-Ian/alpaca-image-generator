import { createEffect, createSignal, For } from "solid-js";
import alpaca from "../lib/alpaca";

export default function AlpacaAccessories() {
 const accessories = alpaca.map((item) => item).reverse();

 const [labels] = createSignal(accessories);
 const [selectedAccessory, setSelectedAccessory] = createSignal<number>(1);
 const [styleLabels, setStyleLabels] = createSignal<
  { id: number; label: string }[]
 >([]);

 console.log(accessories);

 createEffect(() => {
  setStyleLabels(
   accessories[selectedAccessory() - 1].items.map((item) => {
    return { id: item.id, label: item.label };
   })
  );
 });

 return (
  <section>
   <div id="accessories">
    <h2 class="uppercase text-xl font-bold">Accessorize the Alpaca's</h2>
    <div
     id="accesorize-controls"
     class="w-1/2 flex items-center justify-start flex-wrap gap-4 my-4"
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
    <div id="accessorize-styles" class="w-1/2 space-x-3 space-y-4">
     <For each={styleLabels()}>
      {(item, _id) => (
       <button class="btn--toggles focus:bg-blue-900 focus:text-white">
        {item.label}
       </button>
      )}
     </For>
    </div>
   </div>
  </section>
 );
}
