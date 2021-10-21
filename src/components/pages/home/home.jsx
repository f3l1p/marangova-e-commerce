import React from "react";
import "./home.scss";
import ItemListContainer from "../../itemListContainer/itemListContainer/itemListContainer";
import banner from "../../../assets/banner-1.jpg";
import { useSpring, animated } from "react-spring";

const Home = () => {
	const slide = useSpring({
		from: { y: 100, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 800,
	});

	return (
		<div className="home">
			<animated.section style={slide} className="banner-section">
				<img className="banner" alt="banner" src={banner} />
			</animated.section>

			<section
				style={{
					marginTop: "200px",
					marginBottom: "200px",
					textAlign: "center",
				}}
			>
				<div>
					<h2 style={{ fontSize: "30px" }}>Productos Destacados</h2>
					<ItemListContainer />
				</div>
			</section>
			<section
				className="category-section"
				style={{ margin: "200px", textAlign: "center" }}
			></section>
		</div>
	);
};

export default Home;
