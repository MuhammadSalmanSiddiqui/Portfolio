import React from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

import Crear1 from './images/crear-1.png';
import Crear2 from './images/crear-2.png';
import Crear3 from './images/crear-3.png';
import Fiver21 from './images/fiver-2.png';
import Fiver22 from './images/fiver-22.png';
import Fiver23 from './images/fiver-23.png';
import Wifi from './images/wifi.png';
import Rest1 from './images/rest-1.png';
import Res2 from './images/Res-2.png';
import Burger11 from './images/burger-11.png';
import Burger21 from './images/burger-22.png';
import Punk from './images/punk.png';
import Nike from './images/nike.png';
import Sports from './images/sports.png';
import Expense from './images/expense.png';
import Mage from './images/mage.png';







class Projects extends React.Component {

	render() {
		return (
			<div className="wrapper wrapper-container">
				<h1 className="base-title">Projects</h1>
					<div className="projects-container">
						<article className="project" style={{ backgroundImage: `url(${Crear2})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "/projects" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-1<span>_</span></h3>
								</div>
							</Link>
						</article>
						<article className="project" style={{ backgroundImage: `url(${Crear1})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "/projects" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-1<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Crear3})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "/projects" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-1<span>_</span></h3>
								</div>
							</Link>
						</article>
						<article className="project" style={{ backgroundImage: `url(${Burger11})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "http://burger-maker.surge.sh/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Burger App<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Burger21})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "http://burger-maker.surge.sh/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Burger App<span>_</span></h3>
								</div>
							</Link>
						</article>
						<article className="project" style={{ backgroundImage: `url(${Mage})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://www.magebrandmarketing.com/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Local Client Project<span>_</span></h3>
								</div>
							</Link>
						</article>
						<article className="project" style={{ backgroundImage: `url(${Fiver21})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "http://react-forms.surge.sh" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-2<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Fiver22})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "http://react-forms.surge.sh" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-2<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Fiver23})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "http://react-forms.surge.sh" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-2<span>_</span></h3>
								</div>
							</Link>
						</article>
				
						<article className="project" style={{ backgroundImage: `url(${Wifi})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://wifi-next-project.vercel.app/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Fiver Project-3<span>_</span></h3>
								</div>
							</Link>
						</article>
						
						<article className="project" style={{ backgroundImage: `url(${Sports})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://muhammadsalmansiddiqui.github.io/sports-news-website/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Sports<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Punk})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://muhammadsalmansiddiqui.github.io/punk-api-fetching/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">API Fetching<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Rest1})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://muhammadsalmansiddiqui.github.io/restaurant-website/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Resturant Template<span>_</span></h3>
								</div>
							</Link>
						</article>

						<article className="project" style={{ backgroundImage: `url(${Res2})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://muhammadsalmansiddiqui.github.io/restaurant-website/aboutus.html" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Resturant Template<span>_</span></h3>
								</div>
							</Link>
						</article>
						

						<article className="project" style={{ backgroundImage: `url(${Nike})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://muhammadsalmansiddiqui.github.io/nike-shoe-page/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Nike<span>_</span></h3>
								</div>
							</Link>
						</article>
						<article className="project" style={{ backgroundImage: `url(${Expense})` }}>
							<Link className="project-link" to={location => ({ ...location, pathname: "https://muhammadsalmansiddiqui.github.io/nike-shoe-page/" })} target="_blank">
								<div className="project-container">
									<h3 className="project-name">Expense Tracker<span>_</span></h3>
								</div>
							</Link>
						</article>
					
					</div>
			</div>
		)
	}
}

export default Projects;