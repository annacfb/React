import Title from './../components/Title/index';
import Card from './../components/Card/index';
import Search from './search';

function Home() {
    return (      
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
                <Search/>
                <br></br>
            <Card />
        </div>
    )
}


export default Home;