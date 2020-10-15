import React from 'react';
import useScripts from '../../components/use-scripts';
import Socials from '../../components/socials/Socials';
import PhotoBg from './images/salman.png';

import './Home.scss';

const Home = () => {
	
	useScripts('js/chunk-app-drawing.js');
	useScripts('js/app-drawing.js');

	return (
		<div className="wrapper home-wrapper d-flex">
				<div className="name-container">
					<h1 className="base-title">Muhammad Salman Siddiqui</h1>
					<h2 className="tag-color">
						Front-End Developer
					</h2>
					<Socials />
				</div>

				{/*############## CONTENT WITH PHOTO DRAWING ##############*/}
				{/* <div id="app"></div> */}
				<div className='imgclass'><img  src={PhotoBg}></img></div>
		</div>
	);
}

export default Home;