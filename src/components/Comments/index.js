const commentarios = [{
    "usuario": "anna",
    "comentario": "Muito bom, gostei demais!",
    "filme": "vingadores 2"
},
{
    "usuario": "anna",
    "comentario": "Filme maravilhoso!",
    "filme": "vingadores 3"
},
{
    "usuario": "anna",
    "comentario": "Muito bom, gostei!",
    "filme": "vingadores"
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(filmec =>
        filmec.filme === 'vingadores'
    );
    return (
        <div className="container text-center">
            <div className="row">
                {comentariosFilme.map((comment, i) => (
                    <div className="col" key={i.toString()}>
                        <div className="card">
                            {comment.comentario}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}