import React from "react";
import { Row, Col, Button } from "antd";
import {
	InstagramOutlined,
	TwitterOutlined,
	FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = (params) => {
	return (
		<div className="footer">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col offset={2} span={6}>
					<h1>marca</h1>
					<Button>Contacto</Button>
				</Col>

				<Col span={6}>
					<ul>
						<li>
							<Link style={{ textDecoration: "none", color: "white" }} to="/">
								Inicio
							</Link>
						</li>
						<li>
							<Link
								style={{ textDecoration: "none", color: "white" }}
								to="/store"
							>
								tienda
							</Link>
						</li>
						<li>
							<Link
								style={{ textDecoration: "none", color: "white" }}
								to="/about"
							>
								Nosotros
							</Link>
						</li>
						<li>
							<Link
								style={{ textDecoration: "none", color: "white" }}
								to="/contact"
							>
								Contacto
							</Link>
						</li>
					</ul>
				</Col>
				<Col>
					<ul>
						<li>
							<InstagramOutlined style={{ fontSize: "25px" }} />
						</li>
						<li>
							<TwitterOutlined style={{ fontSize: "25px" }} />
						</li>
						<li>
							<FacebookOutlined style={{ fontSize: "25px" }} />
						</li>
					</ul>
				</Col>
			</Row>
		</div>
	);
};

export default Footer;
