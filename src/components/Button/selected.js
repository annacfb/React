import { useState, useEffect } from "react";


const Select = () => {
  const [movies, setMovies] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");


  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies`)
            .then((response) => response.json())
            .then((data) => { 
                setMovies(data)     
            });
  }, []);

  const handleSort = (e) => {
    const sortBy = e.target.value;
    let sortedMovies = [];
  
    if (sortBy === "ano") {
      sortedMovies = [...movies].sort((a, b) => a.ano - b.ano);
    } else if (sortBy === "nota") {
      sortedMovies = [...movies].sort((a, b) => a.nota.localeCompare(b.nota));
    }
  
    setMovies(sortedMovies);
    setSelectedOption(sortBy);
  };
  
  return (
    <select value={selectedOption} onChange={handleSort}>
      <option value="">Selecione uma opção</option>
      <option value="ano">Ordenar por ano</option>
      <option value="genero">Ordenar por gênero</option>
    </select>
  );
  

};

export default Select;
