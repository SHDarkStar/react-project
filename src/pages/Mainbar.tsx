import "./styles.css";
export default function MainBar() {
	return (
	<div className="mainBar">
		<div className="main">
			<h4 style={{"fontSize":"20px"}}>
			Hi and welcome to
			</h4>
			<h2 style={{"fontSize":"60px" }}>
			My Portfolio Website <span className="animatedText">!</span>
			</h2>
			<h5 style={{"fontSize":"20px","color": "rgb(227,224,222)"}}>
			I am a Python programmer, currently learning React.
			</h5>
		</div>
	</div>
	);
}
