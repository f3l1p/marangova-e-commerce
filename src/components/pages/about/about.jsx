import React from "react";
import { Row, Col } from "antd";

const About = () => {
	return (
		<section style={{ height: "80%", margin: "100px", textAlign: "center" }}>
			<Row>
				<h1>Sobre Nosotros</h1>
			</Row>
			<Row>
				<Col span={12}>
					<div>
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsum lorem ipsum
					</div>
				</Col>
				<Col span={12}>{/* <img alt='marangova' src={}/> */}</Col>
			</Row>
			<Row>list of social networks</Row>
		</section>
	);
};

export default About;
