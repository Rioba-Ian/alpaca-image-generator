import { createEffect, createSignal } from "solid-js";
import { useStore } from "../store/alpaca";

export default function AlpacaImage() {
 const imageBg = useStore();
 const [bgColor, setBgColor] = createSignal(imageBg().image);
 // Create a Signal for the image path
 const [backgroundImgPath, setBackgroundImgPath] = createSignal(
  `./src/assets/alpaca/backgrounds/${bgColor()}.png`
 );

 // Update the image path when the background color changes
 createEffect(() => {
  setBgColor(imageBg().image);
  setBackgroundImgPath(`./src/assets/alpaca/backgrounds/${bgColor()}.png`);
 });

 return (
  <section class="my-4">
   <img src={backgroundImgPath()} alt="background image for alpaca" />
  </section>
 );
}
