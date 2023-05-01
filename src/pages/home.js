import React, { useState } from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';
import { useNavigate } from 'react-router-dom';

function Home() {
    
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return (      
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
                <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Busque um filme" aria-label="Search" onChange={(e) => setSearch(e.target.value)}value={search}></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            <Card />
        </div>
    )
}


export default Home;