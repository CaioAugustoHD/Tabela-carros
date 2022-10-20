import React from "react"

const carros = [
  {modelo:"Mobi", marca:"Fiat", preço:"65 mil"},
  {modelo:"Strada", marca:"Fiat", preço:"127 mil"},
  {modelo:"Saveiro", marca:"Volkswagen", preço:"90 mil"},
  {modelo:"Voyage", marca:"Volkswagen", preço:"85 mil"},
  {modelo:"Hilux", marca:"Toyota", preço:"270 mil"},
  {modelo:"Corolla", marca:"Toyota", preço:"160 mil"}
]

function GerarTabela(){
  return(
    <table border="1" style={{borderCollapse: "collapse"}}>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Preço</th>
        </tr>
      </thead>
    </table>
  )
}

export function App() {
  
  return(
      <GerarTabela/>
  )
}
