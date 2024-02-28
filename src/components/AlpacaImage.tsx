import { createEffect, createSignal } from "solid-js";
import { useStore } from "../store/alpaca";

export default function AlpacaImage() {
 const imageBg = useStore();
 const earImg = useStore();
 const [bgColor, setBgColor] = createSignal(imageBg().image);
 const [earColor, setEarColor] = createSignal(earImg().ears);
 // Create a Signal for the image path
 const [ImgPath, setImgPath] = createSignal({
  background: `/alpaca/backgrounds/${bgColor()}.png`,
  ears: `/alpaca/ears/${earColor()}.png`,
 });

 // Update the image path when the background color changes
 createEffect(() => {
  setBgColor(imageBg().image);
  setEarColor(earImg().ears);
  setImgPath({
   background: `/alpaca/backgrounds/${bgColor()}.png`,
   ears: `/alpaca/ears/${earColor()}.png`,
  });
 });

 return (
  <section class="my-4 relative">
   <div
    id="background-image"
    class="relative"
    style={{ background: `${ImgPath().background}` }}
   >
    <img
     src={ImgPath().background}
     alt="background image for alpaca"
     class="-z-1 absolute"
    />
    <img
     src={ImgPath().ears}
     alt="ears image for alpaca"
     class="z-20 absolute top-0 bottom-0"
    />
   </div>
  </section>
 );
}
