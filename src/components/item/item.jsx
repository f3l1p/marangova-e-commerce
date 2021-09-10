import React from "react";

import { Card } from "antd";

const { Meta } = Card;

const Item = ({ title, description, price }) => {
	return (
		<>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						alt="example"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
					/>
				}
			>
				<Meta title={title} description={price} />
			</Card>
		</>
	);
};

export default Item;
