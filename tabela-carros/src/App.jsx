import React from "react"
import { useState } from "react";
import { Header } from "./componentes/Header";
import "./App.css";
import { Tabela } from "./componentes/Tabela";

const carros = [
  {modelo:"Mobi", marca:"Fiat", preco:"65 mil"},
  {modelo:"Strada", marca:"Fiat", preco:"127 mil"},
  {modelo:"Saveiro", marca:"Volkswagen", preco:"90 mil"},
  {modelo:"Voyage", marca:"Volkswagen", preco:"85 mil"},
  {modelo:"Hilux", marca:"Toyota", preco:"270 mil"},
  {modelo:"Corolla", marca:"Toyota", preco:"160 mil"}
]



function pesquisa(marca, setMarca){
  return(
    <section>
      <label>Digite uma marca:</label>
      <input type = "text" value = {marca} onChange = {(e) => setMarca(e.target.value.toUpperCase())}></input>
    </section>
  )
}

export function App() {
  
  const [marca, setMarca] = useState('');

  const carrosFiltradosPorMarca = carros.filter(carro => {
    return carro.marca.toUpperCase().includes(marca);
  })

  return(
    <>
      <Header/>
      {pesquisa(marca, setMarca)}
      <Tabela carrosFiltradosPorMarca = {carrosFiltradosPorMarca}/>
    </>
  )
}