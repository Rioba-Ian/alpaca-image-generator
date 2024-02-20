import { createSignal, For, onCleanup, onMount } from "solid-js";
import alpaca from "../lib/alpaca";

export default function AlpacaAccessories() {
 const accessories = alpaca.filter((item) => item.id !== 0).map((item) => item);

 const [labels] = createSignal(accessories);
 const [selectedAccessory, setSelectedAccessory] = createSignal<number>(1);
 const [styleLabels, setStyleLabels] = createSignal(
  accessories
   .filter((item) => item.id === selectedAccessory())
   .forEach((item) => item.items)
 );

 function updateStyleLabels() {
  setStyleLabels(
   accessories
    .filter((item) => item.id === selectedAccessory())
    .forEach((item) => item.items)
  );
 }
 console.log(styleLabels());

 return (
  <section>
   <div id="accessories">
    <h2 class="uppercase text-xl font-bold">Accessorize the Alpaca's</h2>
    <For each={labels()}>
     {(label, _i) => (
      <button
       onClick={() => {
        setSelectedAccessory(label.id);
        updateStyleLabels();
       }}
      >
       {label.label}
      </button>
     )}
    </For>
   </div>
   <div id="styles">
    <h2 class="uppercase text-xl font-bold">style {selectedAccessory()}</h2>
   </div>
  </section>
 );
}
