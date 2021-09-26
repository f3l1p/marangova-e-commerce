import React from "react";
import { InputNumber } from "antd";

const ItemCount = ({ onChangeValue }) => {
	return (
		<InputNumber
			min={1}
			max={10}
			defaultValue={1}
			onChange={(value) => onChangeValue(value)}
		/>
	);
};

export default ItemCount;
