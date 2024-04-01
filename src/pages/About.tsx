import "./aboutStyle.css";
export default function About() {
	return (
		<section
			className="aboutsec">
			<div style={{"flex":"1 1 0%"}}>
				<img src="http://localhost:5173/programming desktop.png"
					style={{"width":"100%","height":"100%","backgroundSize":"cover"}}/>
			</div>
			<div className="aboutdiv">
				<div>
					<h2 style={{"fontSize":"3rem","lineHeight":1,"fontWeight":700,"textAlign":"center"}}>
						About Me :
					</h2>
				</div>
				<h3>
					So hear is a paragraph about me and my interests.
				</h3>
				<p style={{"fontSize":"20px", "padding": "20px"}}>
                I've been programming since starting college, and realize I'm not going to learn how to code at all!
                    So as you expect, I am a passionate self-taught developer
                    (which is quite a subjective thing as I learned from
                    Quera and Maktabkhooneh.) I have experience coding with Python and want to start Django soon.
                    I attended Fanapcampus classes and learned web designing from zero, now I'm a little familiar with React.
                    Sadly, I've come to I couldn't find any interest in website design.
                    Therefore I will continue to find the branch I'm looking for.  
				</p>
			</div>
		</section>
	);
}
