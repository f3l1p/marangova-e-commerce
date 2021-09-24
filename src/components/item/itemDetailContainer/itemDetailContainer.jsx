import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import productData from "../../../productData";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const { idDetail } = useParams();

	useEffect(() => {
		const getFetchProduct = new Promise((resolve, reject) => {
			let condition = "200";
			if (condition === "200") {
				setTimeout(() => {
					resolve(productData);
				}, 2000);
			} else {
				reject("404");
			}
		});

		if (idDetail) {
			getFetchProduct.then((prod) => {
				const productDetail = prod.find((prod) => prod.id === idDetail);
				setItem(productDetail);
				console.log(productDetail);
			});
		} else {
			<h1>nothing found</h1>;
		}
	}, [idDetail]);

	return (
		<div>
			<ItemDetail
				photo={item.photo}
				name={item.name}
				price={item.price}
				category={item.category}
				description={item.description}
			/>
		</div>
	);
};

export default ItemDetailContainer;
