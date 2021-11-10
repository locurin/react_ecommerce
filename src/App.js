import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./Views/Home/Home";
import { Shop } from "./Views/Shop/Shop";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { CartPage } from "./Views/Cart/CartPage";
import { BuyForm } from "./Views/BuyForm/BuyForm";
import { BuyFinished } from "./Views/BuyForm/BuyFinished";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={CartPage} />
          <Route path="/form" component={BuyForm} />
          <Route path="/thanks" component={BuyFinished} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
