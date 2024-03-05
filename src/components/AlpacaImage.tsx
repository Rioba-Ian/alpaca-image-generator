import { createEffect, createSignal } from "solid-js";
import { accessor } from "../store/alpaca";
import html2canvas from "html2canvas";

export default function AlpacaImage() {
 const state = accessor();
 const {
  image: bgColor,
  ears: earColor,
  eyes: eyesStyle,
  neck: neckStyle,
  leg: legStyle,
  hair: hairStyle,
  mouth: mouthStyle,
  accessory: accessoryStyle,
  nose,
 } = state;
 const [ImgPath, setImgPath] = createSignal({
  background: `/alpaca/backgrounds/${bgColor}.png`,
  ears: `/alpaca/ears/${earColor}.png`,
  eyes: `/alpaca/eyes/${eyesStyle}.png`,
  neck: `/alpaca/neck/${neckStyle}.png`,
  leg: `/alpaca/leg/${legStyle}.png`,
  hair: `/alpaca/hair/${hairStyle}.png`,
  mouth: `/alpaca/mouth/${mouthStyle}.png`,
  accessory: `/alpaca/accessories/${accessoryStyle}.png`,
  nose: `/alpaca/${nose}.png`,
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
   hair: hairStyle,
   mouth: mouthStyle,
   accessory: accessoryStyle,
   nose,
  } = state;
  setImgPath({
   background: `/alpaca/backgrounds/${bgColor}.png`,
   ears: `/alpaca/ears/${earColor}.png`,
   eyes: `/alpaca/eyes/${eyesStyle}.png`,
   neck: `/alpaca/neck/${neckStyle}.png`,
   leg: `/alpaca/leg/${legStyle}.png`,
   hair: `/alpaca/hair/${hairStyle}.png`,
   mouth: `/alpaca/mouth/${mouthStyle}.png`,
   accessory: `/alpaca/accessories/${accessoryStyle}.png`,
   nose: `/alpaca/${nose}.png`,
  });
 });

 const handleDownloadImage = async () => {
  const element = document.getElementById("image-container");
  const bgImage = document.getElementById("image-background-alpaca");

  if (!element || !bgImage) {
   console.error("Element not found.");
   return;
  }

  element.style.height = `${bgImage.offsetHeight}px`;

  try {
   const canvas = await html2canvas(element);

   const dataUrl = canvas.toDataURL("image/png");

   // Create a link element and trigger download
   const link = document.createElement("a");
   link.download = "alpaca.png";
   link.href = dataUrl;
   link.click();
  } catch (error) {
   console.error("Error capturing image:", error);
  }
 };

 return (
  <section class="my-4 relative flex flex-col">
   <div
    id="background-image"
    class="relative"
    style={{ background: `${ImgPath().background}` }}
   >
    <img
     src={ImgPath().background}
     id="image-background-alpaca"
     alt="background image for alpaca"
     class="-z-1 absolute"
    />
    <img
     src={ImgPath().accessory}
     alt="accessory style image for alpaca"
     class="z-50 absolute top-0 bottom-0"
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
     class="z-30 absolute top-0 -bottom-6"
    />
    <img
     src={ImgPath().leg}
     alt="leg image for alpaca"
     class="z-10 absolute  top-0 left-0"
    />
    <img
     src={ImgPath().hair}
     alt="hair image for alpaca"
     class="z-20 absolute top-0 bottom-0 left-0"
    />
    <img
     src={ImgPath().mouth}
     alt="mouth image for alpaca"
     class="z-20 absolute top-0 bottom-0"
    />
    <img
     src={ImgPath().nose}
     alt="nose image for alpaca"
     class="z-10 absolute top-0 bottom-0 "
    />
   </div>

   <div class=" md:absolute md:-bottom-96 translate-y-64 md:translate-x-0  ">
    <div id="generator-buttons" class="flex items-center mx-auto gap-4">
     <button>🔀 Random</button>
     <button onClick={handleDownloadImage}>🖼️ Download</button>
    </div>
   </div>
  </section>
 );
}
