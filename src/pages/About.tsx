import "./styles.css"; //وارد کردن فایل استایل ها, نوشتن بخش درباره ی من همراه با عکس 
export default function About() {
	return (
		<div>
			<div className="aboutDiv">
				<div>
					<h2 style={{"fontSize":"50px","textAlign":"center", "color":"black"}}>
						<b>About Me :</b>
					</h2>
				</div>
				<p style={{"fontSize":"20px", "padding": "20px"}}>
					Hello! My name is Setareh. I'm a programmer and web designer with a wide range of interests in the world of technology and coding.
					I started my journey at university, where besides studying C++, and learning Python as a simple and widely-used language for practical purposes,
					I've got a long way to go! <br />
					As I became familiar with web development, I delved into the fundamentals of web design from scratch.
					Currently, I'm eager to explore backend development and work with the Django framework.
					<br />
					Experiences:
					<br />
					1. Programming: <br />
 						I began with Python, which has been an excellent choice. Python is a powerful yet straightforward language for starters.
						I'm familiar with OOP and some of its famous libraries. <br />
					2. Web Design: <br />
						I've grasped the principles of web design, including HTML, CSS, and JavaScript, to create dynamic and engaging websites. 
					<br />
					My plan is to resume learning, stay updated with new technologies, and develop meaningful, yet interesting projects.

				</p>
			</div>
			<div className="aboutSection">
				<img src="http://localhost:5173/gif2.gif" style={{"width":"100%","height":"100%","backgroundSize":"cover"}}/>
			</div>
		</div>
	);
}
