import React from "react";
import ItemListContainer from "../../itemListContainer/itemListContainer/itemListContainer";

const Home = () => {
	return (
		<div>
			<section style={{ margin: "200px", textAlign: "center" }}>
				<div>
					<h1>Imagen</h1>
				</div>
			</section>

			<section
				style={{
					marginTop: "200px",
					marginBottom: "200px",
					textAlign: "center",
				}}
			>
				<div>
					<h2>Productos Destacados</h2>
					<ItemListContainer />
				</div>
			</section>
			<section style={{ margin: "200px", textAlign: "center" }}>
				<div>
					<h1>Categorias</h1>
				</div>
			</section>
		</div>
	);
};

export default Home;
