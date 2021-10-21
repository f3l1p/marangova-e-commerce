import React from "react";
import { InputNumber } from "antd";

const ItemCount = ({ onChangeValue, value }) => {
	return (
		<InputNumber
			min={1}
			max={10}
			defaultValue={1}
			value={value}
			onChange={(value) => onChangeValue(value)}
		/>
	);
};

export default ItemCount;
