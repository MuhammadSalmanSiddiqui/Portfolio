import React from 'react';
import { Link } from 'react-router-dom';

import './Socials.scss';

function Socials() {
	return (
		<div className="contact-menu d-flex-c">
			<Link to={location => ({ ...location, pathname: "https://github.com/MuhammadSalmanSiddiqui" })} target="_blank">
				<span className="title">GitHub</span>
				<span className="icon-octopus"></span>
			</Link>
			<a href="tel:+923343492391">
				<span className="title">Call</span>
				<span className="icon-phone"></span>
			</a>
			<Link to={location => ({ ...location, pathname: "https://drive.google.com/file/d/1E1tIMrsJMU-GlndaTZDduGoTNBU9r8wh/view?usp=sharing" })} target="_blank">
				<span className="title">CV</span>
				<span className="icon-cv"></span>
			</Link>
		</div>
	)
}

export default Socials;