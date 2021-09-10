import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer/itemListContainer";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemListContainer />
		</div>
	);
}

export default App;
