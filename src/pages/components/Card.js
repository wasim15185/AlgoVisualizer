import React from "react";
import Hr from "./Hr";
import "./../../css/Card.css";

const Card = ({ img, title, author, description }) => {
	return (
		<div className="card">
			<img src={img} alt={`Card-${img}`} />
			<div className="card-body">
				<h2>{title}</h2>
				<Hr />
				<p>{description}</p>
				<h5>{author}</h5>
			</div>
		</div>
	);
};

export default Card;
