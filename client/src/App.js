import "./App.css";
import HomePage from "./pages/HomePage";
import {ProductProvider} from './context/providers/ProductsContext'
function App() {
  return (
    <ProductProvider>
      <HomePage />
    </ProductProvider>
  );
}

export default App;
