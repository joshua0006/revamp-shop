import { BrowserRouter } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";
import RotatingCoins from "./RotatingCoins";
import ProductContainer from "./small-component/ProductContainer";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ImageSlider/>
      <RotatingCoins/>
      <ProductContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
