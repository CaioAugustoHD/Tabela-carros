import React from "react";
import "./Input.css";

export function Input(props){
    return(
      <section>
        <label>Digite uma marca:</label>
        <input type = "text" value = {props.marca} onChange = {(e) => props.setMarca(e.target.value.toUpperCase())}/>
      </section>
    )
  }