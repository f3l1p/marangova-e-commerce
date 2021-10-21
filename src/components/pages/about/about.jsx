import React from "react";
import { Row, Col, Image } from "antd";
import marg from "../../../assets/margarita.jpg";
import { animated, useSpring } from "react-spring";

const About = () => {
	const slideR = useSpring({
		from: { x: 100, opacity: 0 },
		to: { x: 0, opacity: 1 },
		delay: 800,
	});

	const slideL = useSpring({
		from: { x: -100, opacity: 0 },
		to: { x: 0, opacity: 1 },
		delay: 800,
	});
	return (
		<section style={{ height: "80vh", marginTop: "9em", textAlign: "center" }}>
			<Row>
				<Col span={24}>
					<animated.h1 style={{ fontSize: "2.5em", ...slideR }}>
						Sobre Marangova
					</animated.h1>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<animated.div style={slideL}>
						<Image width={300} preview={false} src={marg} />
					</animated.div>

					<animated.div style={{ margin: "2em 30vw", ...slideR }}>
						Marangova es una marca dedicada a la elaboración artesanal de
						accesorios en Arcilla y Turbantes, Inspirada y pensada en la mujer.
					</animated.div>
				</Col>
			</Row>
		</section>
	);
};

export default About;
