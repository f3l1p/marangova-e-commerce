import React from "react";
import "./waAccess.scss";
import waLogo from "../../../assets/whatsapp.png";

const WhatsappLink = () => {
	return (
		<>
			<img alt="whatsapp-icon" className="waAccess" src={waLogo} />
		</>
	);
};

export default WhatsappLink;
