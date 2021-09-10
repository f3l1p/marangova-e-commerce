import React from "react";
import "./itemListContainer.scss";
import ItemList from "../itemList";
import { Row } from "antd";

const ItemListContainer = () => {
	return (
		<div className="productcontainer">
			<Row gutter={[16, 16]}>
				<ItemList />
			</Row>
		</div>
	);
};

export default ItemListContainer;
