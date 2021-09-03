import React, { useState } from "react";

import "./navbar.css";

import { Row, Col, Menu, Input } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const { Search } = Input;
const { SubMenu } = Menu;

const onSearch = (value) => console.log(value);

const handleClick = () => {
	//
};

const Navbar = () => {
	const [current, setCurrent] = useState("");

	return (
		<Row justify="space-around">
			<Col span={4} offset={0}>
				<h2>MARANGOVA</h2>
			</Col>
			<Col span={8}>
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
					<Menu.Item key="home">Inicio</Menu.Item>
					<Menu.Item key="store">Tienda</Menu.Item>
					<SubMenu key="SubMenu" title="Categorias">
						<Menu.Item key="setting:1">Aretes</Menu.Item>
						<Menu.Item key="setting:2">Collares</Menu.Item>
						<Menu.Item key="setting:2">Sujetadores</Menu.Item>
						<Menu.Item key="setting:2">Turbantes</Menu.Item>
					</SubMenu>
					<Menu.Item key="knowUs">Nosotros</Menu.Item>
					<Menu.Item key="contact">Contacto</Menu.Item>
				</Menu>
			</Col>
			<Row justify="space-between">
				<Col span={1}>
					<Search
						placeholder="input search text"
						onSearch={onSearch}
						style={{ width: 200 }}
					/>
				</Col>

				<Col span={1}>
					<ShoppingOutlined style={{ fontSize: "28px" }} />
				</Col>
			</Row>
		</Row>
	);
};

export default Navbar;
