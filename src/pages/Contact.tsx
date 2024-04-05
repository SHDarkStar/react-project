import "./styles.css";
import Form from "./Form";
// قرار دادن لینک راه های ارتباطی و طراحی یک فرم برای ارسال نظرات و برقراری ارتباط با افراد از طریق ایمیل
export default function Contact() {
	return (
		<div className="contacts">
			<h1 style={{textAlign: "center", fontSize:"70px"}}>
				Contact Info
			</h1>
			<Form />
			<div className="links">
				<a className="links" href="https://www.linkedin.com/in/setareh-mizani/">
					LinkedIn:
					<span>
						<b>Setareh Mizani</b>
					</span>
				</a>
				<a className="links" href="https://github.com/SHDarkStar">
					GitHub:
					<span>
                        <b>SHDarkStar</b>
					</span>
				</a>
				<a className="links" href="https://quera.org/profile/DarkStar">
					Quera:
					<span>
						<b>Setareh.Mz</b>
					</span>
				</a>
			</div>
		</div>
	);
}
