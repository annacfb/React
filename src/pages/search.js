import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {

    const [searchParams] = useSearchParams();
    const [filmes, setFilmes] = useState([]);
    const query = searchParams.get("q");

    const getSearchedFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data);
      };

      useEffect(() => {
        const searchWithQueryURL = `https://my-json-server.typicode.com/marycamila184/movies/movies?query=${query}`;
        getSearchedFilmes(searchWithQueryURL);
      }, [query]);

    return (
        
        <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {filmes.length > 0 &&
          filmes.map((filme) => <Card key={filme.id} filme={filme} />)}
      </div>
    </div>
      
    )
}
export default Search;