import { useEffect, useState, useCallback  } from "react";

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistir novamente ✔</p>;
  }
  return <p className="item">Assistir</p>;
}

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
  const [filmes, setFilmes] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchFilmes = useCallback(async () => {
    const response = await fetch(
      `https://my-json-server.typicode.com/marycamila184/movies/movies?q=${searchTerm}`
    );
    const data = await response.json();
    setFilmes(data);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      searchFilmes();
    }
  }, [searchTerm, searchFilmes]);

  return (
    <div>
      <input class="form-control" type="text" placeholder="Busque um filme" aria-label="Search" value={searchTerm} onChange={handleSearchTermChange}></input>
      <br></br>
      <div className="container text-center">
      <div className="row">
      <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col-md-4" key={i}>
            <div className="card">
              <img src={`${filme.poster}`} alt={filme.titulo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                <p><b>Ano:</b> {filme.ano}</p>
                <p><b>Imdb:</b> {filme.nota}</p>
                <a
                  href={`/detalhes/${filme.id}`}>
                  <div className="btn btn-primary">
                  <Assitido
                  javisto={filme.assistido}
                />
                  </div>
                </a>
              </div>
            </div>
            
          </div>
                
        ))}
      </div>
    </div></div></div></div>
  );
}
export default Search;