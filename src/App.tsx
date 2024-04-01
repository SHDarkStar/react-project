import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Mainbar from "./pages/Mainbar";

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<div style={{ border: '1px solid blue', padding: 10 }}>
					<Routes>
						<Route path='mainbar' element={<Mainbar />} />
						<Route path='about' element={<About />} />
						<Route path='skills' element={<Skills />} />
						<Route path='contact' element={<Contact />} />
					</Routes>
				</div>
			</div>
			</BrowserRouter>
	);
}
