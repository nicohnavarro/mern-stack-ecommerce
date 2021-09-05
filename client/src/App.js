import "./App.css";
import HomePage from "./pages/HomePage";
import { ProductProvider } from "./context/providers/ProductsContext";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import NavBar from "./components/ui/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductForm from "./pages/products/ProductForm";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <ProductProvider>
            <Route path="/" exact component={HomePage} />
            <Route path="/products/new" exact component={ProductForm} />
          </ProductProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
