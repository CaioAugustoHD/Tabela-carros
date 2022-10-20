import React from "react"
import { useState } from "react";
import { Header } from "./componentes/Header";

const carros = [
  {modelo:"Mobi", marca:"Fiat", preco:"65 mil"},
  {modelo:"Strada", marca:"Fiat", preco:"127 mil"},
  {modelo:"Saveiro", marca:"Volkswagen", preco:"90 mil"},
  {modelo:"Voyage", marca:"Volkswagen", preco:"85 mil"},
  {modelo:"Hilux", marca:"Toyota", preco:"270 mil"},
  {modelo:"Corolla", marca:"Toyota", preco:"160 mil"}
]

function linhaTabela(marca){

  let linha = [];

  carros.forEach((carro) => {
    if(marca.toUpperCase() == carro.marca.toUpperCase() || marca == ''){
      linha.push(
        <tr>
          <td>{carro.modelo}</td>
          <td>{carro.marca}</td>
          <td>{carro.preco}</td>
        </tr>
      )
    }
  })
  return linha;
}

function GerarTabela(marca){
  return(
    <table border="1" style={{borderCollapse: "collapse"}}>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {linhaTabela(marca)}
      </tbody>
    </table>
  )
}

function pesquisa(marca, setMarca){
  return(
    <section>
      <label>Digite uma marca:</label>
      <input type = "text" value = {marca} onChange = {(e) => setMarca(e.target.value)}></input>
    </section>
  )
}

export function App() {
  
  const [marca, setMarca] = useState('');

  return(
    <>
      <Header/>
      {pesquisa(marca, setMarca)}
      {GerarTabela(marca)}
    </>
  )
}
