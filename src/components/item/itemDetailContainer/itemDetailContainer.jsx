import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../../services/getFirebase";

import { Spin } from "antd";

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
					//console.log(data.docs);
					const productDetail = data.docs.find((prod) => prod.id === idDetail);

					const productData = { id: productDetail.id, ...productDetail.data() };
					//console.log(productData);
					setItem(productData);
					setLoading(false);
				});
		} else {
			<h1>parece que algo salio mal...</h1>;
		}
	}, [idDetail]);

	console.log(item);

	return (
		<div>
			{loading ? (
				<Spin size="large" />
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
