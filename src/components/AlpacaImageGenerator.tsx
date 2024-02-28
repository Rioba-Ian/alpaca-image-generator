import AlpacaImage from "./AlpacaImage";

export default function AlpacaImageGenerator() {
 return (
  <div id="image-generator" class="w-4/5">
   <AlpacaImage />
   <div id="generator-buttons" class="flex items-center justify-between">
    <button>🔀 Random</button>
    <button>🖼️ Download</button>
   </div>
  </div>
 );
}
