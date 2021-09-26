import React, { useState, useEffect } from "react";
import "./itemListContainer.scss";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Spin } from "antd";

import Item from "../../item/item";
import { getFirestore } from "../../../services/getFirebase";

const ItemListContainer = () => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	const { idCategory } = useParams();

	useEffect(() => {
		const dbQuery = getFirestore();

		console.log(dbQuery.collection("items").get());

		dbQuery
			.collection("items")
			.get()
			.then((data) => {
				let mapProducts = data.docs.map((prod) => ({
					id: prod.id,
					...prod.data(),
				}));

				if (idCategory) {
					mapProducts = mapProducts.filter(
						(prod) => prod.category === idCategory
					);
				}

				setProduct(mapProducts);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, [idCategory]);

	const ItemList = () => {
		return (
			<>
				<Row gutter={[16, 16]}>
					{product.map((product) => (
						<Col span={6} key={product.id}>
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
			</>
		);
	};

	return (
		<div className="productcontainer">
			{loading ? (
				<>
					<Spin size="large" />
				</>
			) : (
				<ItemList />
			)}
		</div>
	);
};

export default ItemListContainer;
