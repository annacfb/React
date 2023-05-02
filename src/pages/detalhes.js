import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import { useState, useEffect } from "react";
import Comments from './../components/Comments/index';

function Assitido({ javisto }) {
    if (javisto) {
      return <p>Assistir novamente ✔</p>;
    }
    return <p className="item">Assistir</p>;
  }

function Detalhes() {

    const { id } = useParams();
    const [filmes, setFilmes] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then((response) => response.json())
            .then((data) => { 
                setFilmes(data)     
            });
            
    }, [id]);   

    if (!filmes.titulo) {
        return <div class="p-3 mb-2 bg-danger text-white"><p  class="text-center">Desculpe, não foi possível encontrar os detalhes do filme. Tente novamente mais tarde!</p></div>
        
      }

    return (   
        <div>
            <Title
                title={"Detalhes"}
                text="" />               
            <p class='text-center'><h2>Filme: {filmes.titulo}</h2></p>
           
                        <div class="d-flex justify-content-end">
                        <div class="d-inline-flex p-4 bd-highlight">
                        <img src={filmes.poster} alt={filmes.titulo} />
                            {/* <img src={'/assets/images/' + filmes[0].foto} alt={filmes.nome} className="w-25 rounded"></img> */}
                                <div class="conatiner-fluid flex border w-100 p-5">
                                    <div class="card-body">
                                    <p class='text-left'><b>Nome:</b> {filmes.titulo}</p>
                                    <p class='text-left'><b>Ano de Lançamento:</b> {filmes.ano}</p>
                                    <p class='text-left'><b>Sinopse:</b> {filmes.sinopse}</p>
                                    <div className="btn btn-primary">
                                     <Assitido
                                         javisto={filmes.assistido}
                                    />
                                    </div>
                                    </div>
                                </div>
                        </div>  
                        </div>   
                        <p><Comments filme={filmes.titulo} /></p>
        </div>

    )
}

export default Detalhes;