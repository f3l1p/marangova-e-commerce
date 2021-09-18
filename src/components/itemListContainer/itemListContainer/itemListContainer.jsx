import React, { useState, useEffect } from "react";
import "./itemListContainer.scss";
import { useParams, Link } from "react-router-dom";
import Item from "../../item/item";
import { Row, Col } from "antd";

const productList = [
	{
		id: "1",
		name: "arete 1",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
		category: "aretes",
	},
	{
		id: "2",
		name: "arete 2",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
		category: "aretes",
	},
	{
		id: "3",
		name: "pulsera",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
		category: "pulseras",
	},
	{
		id: "4",
		name: "turbante",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
		category: "turbantes",
	},
	{
		id: "5",
		name: "collar",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
		category: "collares",
	},
	{
		id: "6",
		name: "sujetador",
		price: "0,00",
		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
		category: "sujetadores",
	},
];

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
				console.log(filtered);
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
