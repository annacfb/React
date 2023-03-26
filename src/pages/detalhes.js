import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
  "nome": "Watchmen",
  "duracao": "2H43",
  "foto": "watchmen.png",
  "ano": 2010,
  "genero": "Ação/Aventura",
  "descricao": "Quando um de seus antigos colegas é assassinado, o vigilante mascarado Rorschach descobre um plano para matar e desacreditar todos os super-heróis do passado e do presente. À medida que ele se reconecta com sua antiga legião de combate ao crime, um grupo desorganizado de super-heróis aposentados, dentre os quais somente um possui verdadeiros poderes, Rorschach vislumbra uma ampla e perturbadora conspiração que está ligada ao passado deles e a catastróficas consequências para o futuro.",
  "nota": "73%"
},
{
    "nome": "Interstellar",
    "duracao": "2H49",
    "foto": "interstellarr.png",
    "ano": 2014,
    "genero": "Ficção científica/Aventura",
    "descricao": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    "nota": "92%"
},
{
    "nome": "Blade Runner 2049",
    "duracao": "2H43",
    "foto": "blader.png",
    "ano": 2017,
    "genero": "Ficção científica/Ação",
    "descricao": "Após descobrir um segredo que ameaça o que resta da sociedade, um novo policial parte em busca de Rick Deckard, que está desaparecido há 30 anos.Venha descobrir essa aventura!",
    "nota": "80%"
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />               
            <p class='text-center'><h2>Filme: {filme}</h2></p>
            {(() => {
                if (filme == 'Watchmen') {
                    return (
                        <div class="d-flex justify-content-end">
                        <div class="d-inline-flex p-4 bd-highlight">
                            <img src={'/assets/images/' + filmes[0].foto} alt={filmes.nome} className="w-25 rounded"></img>
                                <div class="conatiner-fluid flex border w-100 p-5">
                                    <div class="card-body">
                                    <p class='text-left'><b>Nome:</b> {filmes[0].nome}</p>
                                    <p class='text-left'><b>Sinopse:</b> {filmes[0].descricao}</p>
                                    <p class='text-left'><b>Genêro:</b> {filmes[0].genero}</p>
                                    <p class='text-left'><b>Ano de Lançamento:</b> {filmes[0].ano}</p>
                                    <p class='text-left'><b>Duração:</b> {filmes[0].duracao}</p>
                                    <p class='text-left'><b>Imdb:</b> {filmes[0].nota}</p>  
                                    </div>
                                </div>
                        </div>  
                        </div>   
                    )
                } else if (filme == 'Interstellar') {
                    return (                        
                        <div class="d-flex justify-content-end">
                        <div class="d-inline-flex p-4 bd-highlight">
                            <img src={'/assets/images/' + filmes[1].foto} alt={filmes.nome} className="w-25 rounded"></img>
                                <div class="conatiner-fluid flex border w-100 p-5">
                                    <div class="card-body">
                                    <p class='text-left'><b>Nome:</b> {filmes[1].nome}</p>
                                    <p class='text-left'><b>Sinopse:</b> {filmes[1].descricao}</p>
                                    <p class='text-left'><b>Genêro:</b> {filmes[1].genero}</p>
                                    <p class='text-left'><b>Ano de Lançamento:</b> {filmes[1].ano}</p>
                                    <p class='text-left'><b>Duração:</b> {filmes[1].duracao}</p>
                                    <p class='text-left'><b>Imdb:</b> {filmes[1].nota}</p>  
                                    </div>
                                </div>
                        </div>  
                        </div>                                              
                    )
                } else {
                    return (
                        <div class="d-flex justify-content-end">
                        <div class="d-inline-flex p-4 bd-highlight">
                            <img src={'/assets/images/' + filmes[2].foto} alt={filmes.nome} className="w-25 rounded"></img>
                                <div class="conatiner-fluid flex border w-100 p-5">
                                    <div class="card-body">
                                    <p class='text-left'><b>Nome:</b> {filmes[2].nome}</p>
                                    <p class='text-left'><b>Sinopse:</b> {filmes[2].descricao}</p>
                                    <p class='text-left'><b>Genêro:</b> {filmes[2].genero}</p>
                                    <p class='text-left'><b>Ano de Lançamento:</b> {filmes[2].ano}</p>
                                    <p class='text-left'><b>Duração:</b> {filmes[2].duracao}</p>
                                    <p class='text-left'><b>Imdb:</b> {filmes[2].nota}</p>  
                                    </div>
                                </div>
                        </div>  
                        </div>   
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;