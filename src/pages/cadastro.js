import Title from './../components/Title/index';
import ButtonPlan from './../components/Button/ButtonPlan';
import React, { useState } from 'react';

function Cadastro(){
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [numerocvc, setNumerocvc] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }
  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }
  function handleNumeroCartaoChange(event) {
    setNumeroCartao(event.target.value);
  }
  function handleNumerocvcChange(event) {
    setNumerocvc(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Nome: ${name}, Telefone: ${telefone}, Endereço: ${endereco}, Numero do Cartão: ${numeroCartao}, CVC: ${numerocvc}`);
}
    return (
        <div col-5>
            <Title
                title={"Cadastro"}
                text={"Veja abaixo os planos disponíveis:"} />
            <form onSubmit={handleSubmit}>
                <form>
                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Nome"  value={name} onChange={handleNameChange}></input>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Nome Cartão"></input>
                    </div>
                </div>
                <br></br>
                <form>
                <div class="row">
                    <div class="col">
                    <input type="tel" class="form-control" placeholder="Telefone" value={telefone} onChange={handleTelefoneChange} ></input>
                    </div>
                    <div class="col">
                    <input type="number" class="form-control" maxLength={20} placeholder="Numero do Cartão"value={numeroCartao} onChange={handleNumeroCartaoChange}></input>
                    </div>
                </div>
            <form>
            <br></br>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" placeholder="Endereço" value={endereco} onChange={handleEnderecoChange}></input>
                </div>
                <div class="col">
                <input type="password" maxLength={3} class="form-control" placeholder="CVC" value={numerocvc} onChange={handleNumerocvcChange}></input>
                </div>
            </div>
            </form>
            </form>
            </form><br></br>
            <ButtonPlan />
            <br></br>
            <div>
            <button type="submit" class="btn btn-primary">Assinar</button>
            </div>
            </form>
        </div>)

}
export default Cadastro;