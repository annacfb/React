import "./card.css";
import { useState } from "react";
import React, { useEffect } from "react";


function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistir novamente ✔</p>;
  }
  return <p className="item">Assistir</p>;
}

export default function Card() {

  const [filmes, setFilmes] = useState([]);


    useEffect(() => {
      fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
          .then(response => response.json())
          .then(data => setFilmes(data))
          .catch(error => {
            console.error('Erro ao carregar filmes:', error);
        });
  }, []);

  

  return (
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
    </div>
  )
}