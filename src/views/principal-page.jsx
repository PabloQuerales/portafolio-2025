import "../styles/principal-page.css";
import { Link } from "react-router-dom";
export default function PrincipalPage() {
	return (
		<div className="container principal">
			<img src="./src/assets/profile.jpg" alt="imagen de perfil" className="principal-img" />
			<p className="principal-p">
				Soy Pablo Querales, desarrollador web con experiencia en React y en la construcción de aplicaciones dinámicas con consumo de APIs. Me apasiona
				resolver problemas a través del código y siempre busco mejorar mis habilidades mediante proyectos desafiantes. Mi enfoque incluye el uso de
				tecnologías modernas como React Router, useContext y gestión de estados para crear experiencias interactivas. Si quieres algo más específico o
				con otro tono, dime y lo ajusto. 🚀
			</p>
			<div className="principal-button-box">
				<button className="principal-button">GitHub</button>
				<button className="principal-button">
					<Link to="/proyectos" className="link">
						Proyectos
					</Link>
				</button>
			</div>
		</div>
	);
}
