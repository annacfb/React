import "./card.css";
import Comments from './../Comments/index';

const filmes = [{
  "nome": "Watchmen",
  "duracao": "2H43",
  "foto": "watchmen.png",
  "ano": 2010,
  "assistido": true,
  "genero": "Ação/Aventura",
  "descricao": "Quando um de seus antigos colegas é assassinado, o vigilante mascarado Rorschach descobre um plano para matar e desacreditar todos os super-heróis do passado e do presente.",
  "nota": "73%"
},
{
  "nome": "Interstellar",
  "duracao": "2H49",
  "foto": "interstellarr.png",
  "ano": 2014,
  "assistido": false,
  "genero": "Ficção científica/Aventura",
  "descricao": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. ",
  "nota": "92%"
},
{
  "nome": "Blade Runner 2049",
  "duracao": "2H43",
  "foto": "blader.png",
  "ano": 2017,
  "assistido": false,
  "genero": "Ficção científica/Ação",
  "descricao": "Após descobrir um segredo que ameaça o que resta da sociedade, um novo policial parte em busca de Rick Deckard, que está desaparecido há 30 anos.Venha descobrir essa aventura!",
  "nota": "80%"
}
]

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p><b>Duração:</b> {filme.duracao}</p>
                <p><b>Genêro:</b> {filme.genero}</p>
                <p><b>Imdb:</b> {filme.nota}</p>
                <Assitido
                  javisto={filme.assistido}
                />
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
            <Comments filme={filme.nome} />
          </div>
        ))}
      </div>
    </div>
  )
}