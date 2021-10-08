import React from "react";
import { Row, Col } from "antd";

const Contact = () => {
	return (
		<>
			<section style={{ height: "85%", margin: "100px", textAlign: "center" }}>
				<Row>
					<h1>Contact Us</h1>
					<p>
						<span>icono de ubicacion</span> cra 2b 29-28 - villavicencio{" "}
					</p>
				</Row>
				<Row>
					<Col span={12}>
						<h2>imagen de correo</h2>
					</Col>
					<Col span={12}>
						<h2>form de mensaje</h2>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default Contact;
