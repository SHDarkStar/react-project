// Navbar.js
import { Link } from 'react-router-dom';
import "./navbarStyle.css";
export default function Navbar() {
	return (
			<div className="container">
				<h3 style={{"fontWeight":700}}>
					Homepage
				</h3>
				<Link className="page" to="mainbar">Home</Link>
				<Link className="page" to="about">About</Link>
				<Link className="page" to="skills">Skills</Link>
				<Link className="page" to="contact">Contact me</Link>
			</div>
	);
}
