import React, { useState, useEffect } from "react";
import "./itemListContainer.scss";
import { useParams } from "react-router-dom";
import { Spin, Row, Col } from "antd";
import ItemList from "../itemList/itemList";
import { getFirestore } from "../../../services/getFirebase";

const ItemListContainer = () => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	const { idCategory } = useParams();

	useEffect(() => {
		const dbQuery = getFirestore();

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

	return (
		<div style={{ height: "85vh" }} className="productcontainer">
			{loading ? (
				<Row style={{ height: "100vh", textAlign: "center" }}>
					<Col span={24}>
						<Spin size="large" />
					</Col>
				</Row>
			) : (
				<div>
					<ItemList product={product} />
				</div>
			)}
		</div>
	);
};

export default ItemListContainer;
