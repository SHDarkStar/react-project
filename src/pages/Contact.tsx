// Contact.js
import "./contactStyle.css";
import Form from "./Form";
export default function Contact() {
	return (
		<section className="contacts1">
			<h2 className="contacts2">
				Contact
			</h2>
			<Form />
			<div style={{"display":"flex","marginTop":"2.5rem","marginBottom":"2.5rem","gap":"1.25rem","justifyContent":"center"}}>
				<a
				className="links"
				href="https://www.linkedin.com/in/setareh-mizani/">
					LinkedIn:
					<span style={{"fontWeight":700}}>
						Setareh Mizani
					</span>
				</a>
				<a className="links">
					<span style={{"fontWeight":700}}>
                        Email: setarehmizani@gmail.com
					</span>
				</a>
				<a
				className="links"
				href="https://quera.org/profile/DarkStar">
					Quera:
					<span style={{"fontWeight":700}}>
						DarkStar
					</span>
				</a>
			</div>
		</section>
	);
}
