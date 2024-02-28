import { createSignal } from "solid-js";
import alpaca from "../lib/alpaca";

export default function AlpacaImage() {
 const backgrounds = alpaca[0].items;
 const [bgColor] = createSignal("default");

 console.log(backgrounds);

 return <section>Image holder</section>;
}
