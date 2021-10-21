import React from "react";

import { Card } from "antd";

const { Meta } = Card;

const Item = ({ title, price, photo }) => {
	return (
		<>
			<Card
				hoverable
				style={{ width: 240, textAlign: "center" }}
				cover={<img alt="example" src={photo} style={{ width: 240 }} />}
			>
				<Meta title={title} description={"$" + price} />
			</Card>
		</>
	);
};

export default Item;
