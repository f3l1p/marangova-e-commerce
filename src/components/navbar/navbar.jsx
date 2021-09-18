import React from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { Row, Col, Menu, Input, Badge } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const { Search } = Input;
const { SubMenu } = Menu;

const onSearch = (value) => console.log(value);

const handleClick = () => {
	//
};

const Navbar = () => {
	//const [current, setCurrent] = useState("");

	return (
		<div className="navbar">
			<Row justify="space-around" align="middle">
				<Col span={4} offset={0}>
					<Link to="/">
						<h2>MARANGOVA</h2>
					</Link>
				</Col>
				<Col span={8}>
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
					<div className="searchbar">
						<Col span={1}>
							<Search
								placeholder="input search text"
								onSearch={onSearch}
								style={{ width: 200 }}
							/>
						</Col>
					</div>

					<Col span={1}>
						<Link to="/cart">
							<Badge count={1}>
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
