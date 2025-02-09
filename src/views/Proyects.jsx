import "../styles/proyects.css";
export default function Proyects() {
	return (
		<>
			<div className="container">
				<div id="carouselExampleCaptions" className="carousel slide">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png" className="d-block w-100" alt="..." />
							<div className="carousel-edite d-none d-md-block">
								<h2>Poke Api</h2>
							</div>
							<div className="carousel-caption d-none d-md-block">
								<p>
									Esta aplicación es un proyecto construido con React y Bootstrap, diseñado para consumir la API de Pokémon (PokeAPI). Permite
									explorar una lista de Pokémon, consultar detalles de cada uno y disfrutar de una experiencia interactiva.
								</p>
								<h5>Tecnologías utilizadas</h5>
								<div>span*3</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5>Second slide label</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5>Third slide label</h5>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</>
	);
}
