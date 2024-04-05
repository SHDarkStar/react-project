// ساخت یک div  برای کاربر که بتواند صفحات را با کلیک روی انها مشاهدا کند
// با استفاده از react-router-dom  چهار صفحه لینک شدند
import { Link } from 'react-router-dom';
import "./styles.css";
export default function Navbar() {
	return (
			<div className="container">
				<img src='./logo.png' style={{width:"70px", height:"70px"}}/>
				<Link className="page" to="mainbar">Home</Link>
				<Link className="page" to="about">About</Link>
				<Link className="page" to="skills">Skills</Link>
				<Link className="page" to="contact">Contact me</Link>
			</div>
	);
}
