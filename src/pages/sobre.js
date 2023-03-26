    import React from 'react';
    import { useParams } from 'react-router-dom';
    import Title from './../components/Title/index';

    function Sobre() {
        const { name } = useParams();
        
        return (
            <div>  
                <Title
                    title={"Sobre"}
                    text={"Mais informações sobre a empresa"} />          
                <div class="d-flex justify-content-center">
                                <div class="container-fluid flex border border-dark w-50 rounded p-5">
                                    <div class="card-body">
                                    <p>Tele Filme é um serviço de streaming por assinatura que permite assistir a séries e filmes em um aparelho conectado à internet. Dependendo do seu plano, você também pode baixar seus títulos favoritos em aparelhos iOS, Android ou Windows 10 para assistir quando não tiver internet.</p>
                                    <p>A missão da Tele Filme é entreter o mundo, e é por isso que levamos até você as melhores séries, documentários, filmes e jogos para celulares e dispositivos móveis. Nossos assinantes controlam o que querem ver e quando, com uma única assinatura. Nosso serviço de streaming está disponível em mais de 30 idiomas e 190 países. Somos os maiores fãs de entretenimento do mundo e estamos sempre buscando novas maneiras de ajudar você a descobrir sua próxima história favorita.</p>
                                    </div>
                                </div>
                        <div class="d-inline-flex p-4 bd-highlight">
                            <img src="../assets/images/pipoca2.png" className="w-100 rounded"></img>
                        </div>  
                        </div>  
            </div>
            
        )
    }

    export default Sobre;