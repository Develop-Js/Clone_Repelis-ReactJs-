import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="social-media">
					<h3> Raúl Camacho M.</h3>
					<ul>
						<li className="instagram">
							{/* <span>Instagram</span> */}
							<a
								href="https://www.instagram.com/raul_camachom/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-instagram" />
							</a>
						</li>
						<li className="facebook">
							{/* <span>Facebook</span> */}
							<a
								href="https://www.facebook.com/profile.php?id=100027158500978"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook" />
							</a>
						</li>
						<li className="twitter">
							{/* <span>Twitter</span> */}
							<a href="https://twitter.com/RaulCamachoM" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-twitter" />
							</a>
						</li>
						<li className="linkedin">
							{/* <span>LinkedIn</span> */}
							<a
								href="https://www.linkedin.com/in/raul-camacho-rcm/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin-in" />
							</a>
						</li>
						<li className="email">
							<a href="mailto:rauldevcam@gmail.com">
								<i className="fas fa-at" />
							</a>
						</li>
					</ul>
				</div>
				<p>
					** This project is only a copy of a exists page, was create with the target of learn web developer.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
