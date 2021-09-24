import React, { useState, useEffect } from "react";
import "./itemListContainer.scss";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "antd";

import Item from "../../item/item";
import productList from "../../../productData";

const ItemListContainer = () => {
	const [product, setProduct] = useState([]);
	const { idCategory } = useParams();

	useEffect(() => {
		const getFetch = new Promise((resolve, reject) => {
			let condition = "200";
			if (condition === "200") {
				setTimeout(() => {
					resolve(productList);
				}, 2000);
			} else {
				reject("404");
			}
		});

		if (idCategory) {
			getFetch.then((res) => {
				const filtered = res.filter((prod) => prod.category === idCategory);
				setProduct(filtered);
			});
		} else {
			getFetch.then((res) => setProduct(res));
		}
	}, [idCategory]);

	const itemList = () => {
		return (
			<>
				{product.map((product) => (
					<Col span={6}>
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
			</>
		);
	};

	return (
		<div className="productcontainer">
			<Row gutter={[16, 16]}>{itemList()}</Row>
		</div>
	);
};

export default ItemListContainer;
