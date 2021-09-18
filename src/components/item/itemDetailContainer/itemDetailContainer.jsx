import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";

const product = {
	id: 1,
	name: "arete 1",
	price: "0,00",
	description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
	photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
	category: "aretes",
};

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});

	useEffect(() => {
		const getFetchProduct = new Promise((resolve, reject) => {
			let condition = "200";
			if (condition === "200") {
				setTimeout(() => {
					resolve(product);
				}, 2000);
			} else {
				reject("404");
			}
		});

		getFetchProduct
			.then((res) => setItem(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ItemDetail
				photo={product.photo}
				name={product.name}
				price={product.price}
				category={product.category}
				description={product.description}
			/>
		</div>
	);
};

export default ItemDetailContainer;
