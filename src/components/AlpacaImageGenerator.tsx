import AlpacaImage from "./AlpacaImage";

export default function AlpacaImageGenerator() {
 return (
  <div class="md:w-4/5 mx-auto grid grid-rows-2 mb-20 md:mb-0">
   <div>
    <AlpacaImage />
   </div>

   <div
    id="generator-buttons"
    class="translate-y-60 md:translate-y-72 flex items-center mx-auto gap-4 "
   >
    <button>🔀 Random</button>
    <button>🖼️ Download</button>
   </div>
  </div>
 );
}
