import { createEffect, createSignal } from "solid-js";
import { accessor } from "../store/alpaca";

export default function AlpacaImage() {
 const state = accessor();
 const {
  image: bgColor,
  ears: earColor,
  eyes: eyesStyle,
  neck: neckStyle,
  leg: legStyle,
 } = state;
 const [ImgPath, setImgPath] = createSignal({
  background: `/alpaca/backgrounds/${bgColor}.png`,
  ears: `/alpaca/ears/${earColor}.png`,
  eyes: `/alpaca/eyes/${eyesStyle}.png`,
  neck: `/alpaca/neck/${neckStyle}.png`,
  leg: `/alpaca/leg/${legStyle}.png`,
 });

 // Update the image path when the background color changes
 createEffect(() => {
  const state = accessor();
  const {
   image: bgColor,
   ears: earColor,
   eyes: eyesStyle,
   neck: neckStyle,
   leg: legStyle,
  } = state;
  setImgPath({
   background: `/alpaca/backgrounds/${bgColor}.png`,
   ears: `/alpaca/ears/${earColor}.png`,
   eyes: `/alpaca/eyes/${eyesStyle}.png`,
   neck: `/alpaca/neck/${neckStyle}.png`,
   leg: `/alpaca/leg/${legStyle}.png`,
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
     class="z-10 absolute top-0 bottom-0"
    />
    <img
     src={ImgPath().neck}
     alt="neck image for alpaca"
     class="z-10 absolute top-0 bottom-0"
    />
    <img
     src={ImgPath().eyes}
     alt="eyes image for alpaca"
     class="z-20 absolute top-0 -bottom-6"
    />
    <img
     src={ImgPath().leg}
     alt="ears image for alpaca"
     class="z-10 absolute  top-0 left-0"
    />
   </div>
  </section>
 );
}
