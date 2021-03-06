import React from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { Row, Col, Menu, Badge } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { UseCartContext } from "../../context/cartContext";

const { SubMenu } = Menu;

const handleClick = () => {
	//
};

const Navbar = () => {
	const { productsInCart } = UseCartContext();

	return (
		<div className="navbar">
			<Row justify="space-around" align="middle">
				<Col span={4} offset={0}>
					<Link to="/">
						<h2>MARANGOVA</h2>
					</Link>
				</Col>
				<Col md={10}>
					<div className="menuLg">
						<Menu
							onClick={handleClick}
							// selectedKeys={[current]}
							mode="horizontal"
						>
							<Menu.Item key="home">
								<Link to="/">Inicio</Link>
							</Menu.Item>

							<Menu.Item key="store">
								<Link to="/store">Tienda</Link>
							</Menu.Item>
							<SubMenu key="SubMenu" title="Categorias">
								<Menu.Item key="setting:1">
									<Link to="/category/aretes">Aretes</Link>
								</Menu.Item>
								<Menu.Item key="setting:2">
									<Link to="/category/collares">Collares</Link>
								</Menu.Item>
								<Menu.Item key="setting:3">
									<Link to="/category/sujetadores">Sujetadores</Link>
								</Menu.Item>
								<Menu.Item key="setting:4">
									<Link to="/category/turbantes">Turbantes</Link>
								</Menu.Item>
							</SubMenu>

							<Menu.Item key="knowUs">
								<Link to="/about">Nosotros</Link>
							</Menu.Item>
							<Menu.Item key="contact">
								<Link to="/contact">Contacto</Link>
							</Menu.Item>
						</Menu>
					</div>
				</Col>
				<Row justify="space-between">
					{/* <div className="searchbar">
						<Col span={1}>
							<Search
								placeholder="input search text"
								onSearch={onSearch}
								style={{ width: 200 }}
							/>
						</Col>
					</div> */}

					<Col md={1}>
						<Link to="/cart">
							<Badge count={productsInCart()}>
								<ShoppingOutlined style={{ fontSize: "28px" }} />
							</Badge>
						</Link>
					</Col>
				</Row>
			</Row>
		</div>
	);
};

export default Navbar;
