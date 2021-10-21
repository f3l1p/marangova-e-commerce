import React from "react";
import "./contact.scss";
import { Row, Col, Form, Input, Button } from "antd";
import { EnvironmentTwoTone } from "@ant-design/icons";
import { animated, useSpring } from "react-spring";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 8 },
};

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};

const Contact = () => {
	const slide = useSpring({
		from: { y: 100, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 800,
	});

	const onFinish = (values) => {
		console.log(values);
	};
	return (
		<>
			<section
				className=".contact-section {
					"
				style={{ height: "85vh", margin: "100px", textAlign: "center" }}
			>
				<Row>
					<Col md={24} style={{ textAlign: "center" }}>
						<animated.div style={slide}>
							<h1 style={{ fontSize: "3em" }}>Contactanos!</h1>
							<p>
								<span>
									<EnvironmentTwoTone
										style={{ fontSize: "1.5em" }}
										twoToneColor="#eb2f96"
									/>
								</span>
								Cra 2b 29-28 - villavicencio
							</p>
							<p></p>
							<br />

							<Form
								{...layout}
								name="nest-messages"
								onFinish={onFinish}
								validateMessages={validateMessages}
							>
								<Form.Item
									name={["user", "name"]}
									label="Nombre"
									rules={[{ required: true }]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									name={["user", "email"]}
									label="Email"
									rules={[{ type: "email" }]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									name={["user", "introduction"]}
									label="Mensaje"
									rules={[{ required: true }]}
								>
									<Input.TextArea />
								</Form.Item>
								<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</Form>
						</animated.div>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default Contact;
