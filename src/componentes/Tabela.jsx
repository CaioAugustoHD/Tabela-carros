import React from "react";
import "./Tabela.css";
  
export function Tabela(props){
    return(
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props.carrosFiltradosPorMarca.map(carro => {
            return(
                <tr key={carro.modelo}>
                    <td>{carro.modelo}</td>
                    <td>{carro.marca}</td>
                    <td>{carro.preco}</td>
                </tr>
            )
          })}
        </tbody>
      </table>
    )
}