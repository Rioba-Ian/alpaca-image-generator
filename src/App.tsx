import AlpacaAccessories from "./components/AlpacaAccessories";
import AlpacaImageGenerator from "./components/AlpacaImageGenerator";

function App() {
 return (
  <div id="app-container" class="">
   <main class="max-w-7xl mx-auto w-4/5 mt-[8vmin]">
    <h1 class="text-4xl uppercase font-bold">Alpaca Generator</h1>
    <div id="content" class="grid md:grid-cols-2">
     <AlpacaImageGenerator />
     <AlpacaAccessories />
    </div>
   </main>
  </div>
 );
}

export default App;
