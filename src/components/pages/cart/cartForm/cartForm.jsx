import React, { useState } from "react";
import { Form, Input, Divider, Button } from "antd";

const CartForm = ({ total, formData, setFormData }) => {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");

	const handleOnChange = (e) => {
		console.log(e.target.value);
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	console.log(formData);

	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};
	return (
		<>
			<Form
				form={form}
				layout="vertical"
				initialValues={{
					requiredMarkValue: requiredMark,
				}}
				onValuesChange={onRequiredTypeChange}
				requiredMark={requiredMark}
				// onFinish={}
				onChange={handleOnChange}
			>
				<Form.Item
					label="Nombre"
					name="name"
					required
					tooltip="This is a required field"
					rules={[{ required: true, message: "Porfavor, ingresa tu nombre!" }]}
				>
					<Input value={setFormData.name} placeholder="nombre..." />
				</Form.Item>
				<Form.Item
					label="Telefono"
					name="tel"
					required
					tooltip="This is a required field"
					rules={[
						{ required: true, message: "Porfavor, ingresa tu telefono!" },
					]}
				>
					<Input value={formData.tel} placeholder="xxx-xxx-xxxx" />
				</Form.Item>
				<Form.Item
					label="e-mail"
					name="email"
					required
					tooltip="This is a required field"
					rules={[{ required: true, message: "Porfavor, ingresa tu correo!" }]}
				>
					<Input value={formData.email} placeholder="tu correo..." />
				</Form.Item>
				<Divider />
				<h1>TOTAL: ${total}</h1>
				<Form.Item>
					<Button htmlType="submit">TERMINAR COMPRA</Button>
				</Form.Item>
				.
			</Form>
		</>
	);
};

export default CartForm;
