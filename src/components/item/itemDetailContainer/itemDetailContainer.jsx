import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../../services/getFirebase";

import { Spin, Row, Col } from "antd";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(true);
	const { idDetail } = useParams();

	useEffect(() => {
		const dbQuery = getFirestore();

		if (idDetail) {
			dbQuery
				.collection("items")
				.get()
				.then((data) => {
					const productDetail = data.docs.find((prod) => prod.id === idDetail);
					const productData = { id: productDetail.id, ...productDetail.data() };
					setItem(productData);
					setLoading(false);
				});
		} else {
			<h1>parece que algo salio mal...</h1>;
		}
	}, [idDetail]);

	return (
		<div>
			{loading ? (
				<Row style={{ height: "100vh", textAlign: "center" }}>
					<Col span={24}>
						<Spin size="large" />
					</Col>
				</Row>
			) : (
				<ItemDetail
					photo={item.photo}
					name={item.name}
					price={item.price}
					category={item.category}
					description={item.description}
					item={item}
				/>
			)}
		</div>
	);
};

export default ItemDetailContainer;
