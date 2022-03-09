import React, { Component } from "react";
import "./styling.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      peso: "",
      altura: "",
      resultado_num: "",
      classificacion: "",
    }
  }

  /* Permite estabalcer estado para recepcion de nuevo input */ 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  calculo = () => {
    let estaturaFinal = ((this.state.altura)*(this.state.altura));
    let resultado_num = this.state.peso / estaturaFinal;
    let classificacion = "";
    let alerta = "";
    

    if (resultado_num <= 18.5){
      classificacion = "Peso bajo";
      alerta = "danger";
    }else if (resultado_num > 18.5 && resultado_num < 25){
      classificacion = "Peso saludable";
      alerta = "success";
    }else if (resultado_num >= 25 && resultado_num <= 29.9) {
      classificacion = "Sobre Peso";
      alerta = "warning";
    }else if (resultado_num >= 30 && resultado_num <= 34.9){
      classificacion = "Obesidad grado 1";
      alerta = "danger";
    }else if (resultado_num >= 35 && resultado_num <= 39.9){
      classificacion = "Obesidad grado 2";
      alerta = "danger";
    }else if (resultado_num >= 40){
      classificacion = "Obesidad morbida";
      alerta = "danger";
    }

    this.setState({classificacion: classificacion});
    this.setState({alerta: alerta});
    this.setState({resultado_num: Math.round(resultado_num * 100) / 100 }); 
  };

  handleSubmit = (event) => {
    this.calculo();
    event.preventDefault();
  };

  render() {
    return (
      <div class="App">
        <form onSubmit={this.handleSubmit}>
          <h2> Calculadora de IMC </h2>
          <div>
            <label> Peso (kg) </label>
            <input type="number"
                  step="0.1"
                  value={this.state.peso}
                  name="peso"
                  onChange={this.handleChange} />
          </div>

          <div>
            <label> Altura (m) </label>
                <input type="number"
                      step="0.1"
                      value={this.state.altura}
                      name="altura"
                      onChange={this.handleChange} />
          </div>
        
            <button type="submit">Submit</button>
            <div>
              <IMCdisplay res={this.state.resultado_num} label={this.state.classificacion} alertClass={this.state.alerta} />
            </div>
          </form>
        </div>
      );
  }
}

function IMCdisplay(check){
  let color
  if(check.alertClass == "success"){
    color = "#33D273"
  }else if(check.alertClass == "warning"){
    color = "#E8E81E"
  }else if(check.alertClass == "danger"){
    color = "#E84D1E"
  }
  return (
    <div style={{backgroundColor: color}} className="res">
      <div>{ check.res }</div>
      <div>{ check.label }</div>
    </div>  
  )
}

export default App;