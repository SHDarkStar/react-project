//تمام صفحات ساخته شده در این بخش به همدیگر متصل میشوند و به ترتیب 4 صفحه و navigation را وارد میکنیم
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import MainBar from "./pages/Mainbar";

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<div style={{paddingTop:"10px"}}>
					<Routes>
						<Route path='mainBar' element={<MainBar />} />
						<Route path='about' element={<About />} />
						<Route path='skills' element={<Skills />} />
						<Route path='contact' element={<Contact />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
