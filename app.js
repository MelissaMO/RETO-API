const btnGetMovies = document.querySelector("#get-movies");
const inputBuscar = document.querySelector(".input-buscar");
const container = document.querySelector(".container");

const url ='https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

const respuesta = await fetch(url);
const data =await respuesta.json();
const movies = data.entries;


btnGetMovies.onclick = () => {
	const texto = inputBuscar.value;

	let moviesFiltradas = movies.filter(
	  (movie) => movie.title.toLowerCase().includes(texto.toLowerCase())  
	);  

	readMovies(moviesFiltradas);
};
	
function readMovies(listpeliculas = movies) {
	container.innerHTML = "";
	listpeliculas.forEach(movie => {
		container.innerHTML += `<div class="movie">
		<h4>${movie.title}</h4>
		<p>${movie.description}</p>
		</div>`;
	});
		
}

	




