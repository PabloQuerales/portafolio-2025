import "../styles/proyects.css";
import Card from "../components/Card";
export default function Proyects() {
	return (
		<>
			<div className="container">
				<h1>Proyectos destacados</h1>
				<div className="row d-flex justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
