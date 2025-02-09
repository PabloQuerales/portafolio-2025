import "../src/styles/App.css";
import PrincipalPage from "./views/principal-page";
import Proyects from "./views/Proyects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Studies from "./views/Studies";
import Experience from "./views/Experience";
import TechStack from "./views/TechStack";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<PrincipalPage />} />
				<Route path="proyectos" element={<Proyects />} />
				<Route path="experiencia" element={<Experience />} />
				<Route path="estudios" element={<Studies />} />
				<Route path="habilidades-tecnicas" element={<TechStack />} />
				<Route path="*" element={<h1>Not found!</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
