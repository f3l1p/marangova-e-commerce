import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhatsappLink from "./components/UI/whatsappLink/waAccess";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home/home";
import Store from "./components/pages/store/store";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Cart from "./components/pages/cart/cart";
import ItemDetailContainer from "./components/item/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/itemListContainer/itemListContainer/itemListContainer";

import { CartContextProvider } from "./context/cartContext";

function App() {
	return (
		<CartContextProvider>
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/store" component={Store} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/cart" component={Cart} />
						<Route
							path="/category/:idCategory"
							exact
							component={ItemListContainer}
						/>
						<Route
							path="/detail/:idDetail"
							exact
							component={ItemDetailContainer}
						/>
					</Switch>
					<WhatsappLink />
					<p> footer </p>
				</div>
			</Router>
		</CartContextProvider>
	);
}

export default App;

//cart.reduce((acc, element) => (acá va la suma), 0)
