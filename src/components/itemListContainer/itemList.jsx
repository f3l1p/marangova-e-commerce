import React, { useState, useEffect } from "react";
import Item from "../item/item";
import { Col } from "antd";

const productList = [
	{
		id: 1,
		name: "arete 1",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "urllllll",
	},
	{
		id: 2,
		name: "arete 2",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "urllllll",
	},
	{
		id: 3,
		name: "pulsera",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "urllllll",
	},
	{
		id: 4,
		name: "turbante",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "urllllll",
	},
	{
		id: 5,
		name: "collar",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "urllllll",
	},
	{
		id: 6,
		name: "sujetador",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "urllllll",
	},
];

const ItemList = (props) => {
	const [product, setProduct] = useState([]);

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

	useEffect(() => {
		getFetch.then((res) => setProduct(res));
	}, []);

	return (
		<>
			{productList.map((product) => (
				<Col span={6}>
					<Item key={product.id} title={product.name} price={product.price} />
				</Col>
			))}
			;
		</>
	);
};

export default ItemList;
