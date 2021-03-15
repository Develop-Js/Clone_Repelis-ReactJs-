import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="social-media">
					<h3> Raúl Camacho M.</h3>
					<ul>
						<li className="github">
							<a href="https://github.com/Raulcmm" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-github"></i>
							</a>
						</li>
						<li className="twitter">
							<a href="https://twitter.com/RaulCamachoM" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-twitter" />
							</a>
						</li>
						<li className="linkedin">
							<a href="https://www.linkedin.com/in/raul-camacho-rcm/" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin-in" />
							</a>
						</li>
						<li className="email">
							<a href="mailto:rauldevcam@gmail.com?subject=Work Contact">
								<i className="fas fa-at" />
							</a>
						</li>
					</ul>
				</div>
				<p>** This project is only a copy of a exists page, was create with the target of learn web developer.</p>
			</div>
		</footer>
	);
};

export default Footer;
