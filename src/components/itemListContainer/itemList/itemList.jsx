import React from "react";
import { Row, Col } from "antd";
import Item from "../../item/item";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const ItemList = ({ product }) => {
	const slide = useSpring({
		from: { y: 100, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 800,
	});

	return (
		<animated.div style={slide}>
			<Row gutter={[24, 24]} style={{ textAlign: "center" }}>
				{product.map((product) => (
					<Col sm={16} md={8} lg={6} key={product.id}>
						<Link to={`/detail/${product.id}`}>
							<Item
								key={product.id}
								title={product.name}
								price={product.price}
								photo={product.photo}
							/>
						</Link>
					</Col>
				))}
			</Row>
			<br />
		</animated.div>
	);
};

export default ItemList;
