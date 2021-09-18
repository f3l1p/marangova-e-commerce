import React from "react";

import { Card, Button } from "antd";

const { Meta } = Card;

const Item = ({ title, price, photo }) => {
	return (
		<>
			<Card
				hoverable
				style={{ width: 240, textAlign: "center" }}
				cover={<img alt="example" src={photo} style={{ width: 240 }} />}
			>
				<Meta title={title} description={price} />
				<Button style={{ marginTop: "18px" }} shape="round">
					agregar a carrito
				</Button>
			</Card>
		</>
	);
};

export default Item;
