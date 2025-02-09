import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<nav className="navbar sticky-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Pablo Querales
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
								Offcanvas
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link to="/proyectos" className="nav-link">
										Proyectos
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/estudios" className="nav-link">
										Estudios y Certificados
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/experiencia" className="nav-link">
										Experiencia
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/habilidades-tecnicas" className="nav-link ">
										Tech Stack
									</Link>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Contactame
									</a>
									<ul className="dropdown-menu">
										<li>
											<a
												className="dropdown-item"
												href="https://www.linkedin.com/in/pablo-querales-ab4950139/"
												target="_blank"
												rel="noopener noreferrer">
												Linkedin
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="https://github.com/PabloQuerales" target="_blank" rel="noopener noreferrer">
												GitHub
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Correo
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
