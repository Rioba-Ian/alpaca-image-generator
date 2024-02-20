import AlpacaImage from "./AlpacaImage";

export default function AlpacaImageGenerator() {
 return (
  <div id="image-generator">
   <AlpacaImage />
   <div id="generator-buttons">
    <button>🔀 Random</button>
    <button>🖼️ Download</button>
   </div>
  </div>
 );
}
