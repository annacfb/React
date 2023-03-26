import React from 'react';
import Title from './../components/Title/index';
 
const planos = [{
    "nome": "Básico com anúncios",
    "Preço": "19,90",
    "Detalhes": "1 tela, resolução 720p e sem opção de download",
  },
  {
    "nome": "Padrão",
    "Preço": "39,90",
    "Detalhes": "2 telas simultâneas, resolução 1080p e opção de download",
  },
  {
    "nome": "Premium",
    "Preço": " 55,90",
    "Detalhes": "4 telas simultâneas, resolução 4K + HDR e opção de download",
  }
  ]


function Planos(){
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
             <div className="container text-center">
      <div className="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card">
              {/* <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title">{plano.nome}</h5>
                <p><b>Preço:</b> {plano.Preço} ao mês.</p>
                <p><b>Detalhes:</b> {plano.Detalhes}</p> 
                <a
                  href={"#"}
                >
                  <div className="btn btn-primary">
                    Adquirir
                  </div>
                </a>
              </div>
            </div>
            {/* <Comments filme={filme.nome} /> */}
          </div>
        ))}
      </div>
    </div>       
        </div>
    )   
}
 
export default Planos;