import AlpacaAccessories from "./components/AlpacaAccessories";
import AlpacaImageGenerator from "./components/AlpacaImageGenerator";

function App() {
 return (
  <div id="app-container" class="">
   <main class="max-w-7xl mx-auto w-4/5 mt-[8vmin]">
    <h1 class="md:text-4xl uppercase font-bold text-center md:text-left ">
     Alpaca Generator
    </h1>
    <div id="content" class="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
     <AlpacaImageGenerator />
     <AlpacaAccessories />
    </div>
   </main>
  </div>
 );
}

export default App;
