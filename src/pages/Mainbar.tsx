// Hero.js
import "./mainbarStyle.css";
export default function Mainbar() {
	return (
	<section
		className="mainbar">
		<div className="main">
		<div>
			<h4 style={{"fontSize":"1.25rem","lineHeight":"1.75rem"}}>
				Hi and welcome to
			</h4>
			<h2 style={{"fontSize":"3rem","lineHeight":1}}>
			My Portfolio Website!
			</h2>
		</div>
		<h5 style={{"fontSize":"1.25rem","lineHeight":"1.75rem"}}>
			I am a python programmer, currently learning React.
		</h5>
		</div>
	</section>
	);
}
