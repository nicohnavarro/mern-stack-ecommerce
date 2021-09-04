import "./App.css";
import HomePage from "./pages/HomePage";
import { ProductProvider } from "./context/providers/ProductsContext";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <ProductProvider>
          <HomePage />
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
