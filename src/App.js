import React, {Component} from "react";
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
    let estaturaFinal = ((this.state.altura)*(this.state.altura))/10000;
    let resultado_num = this.state.peso / estaturaFinal;
    let classificacion = "";
    

    if (resultado_num <= 18.5){
      classificacion = "Peso bajo";
    }else if (resultado_num > 18.5 && resultado_num <= 24.9){
      classificacion = "Peso saludable";
    }else if (resultado_num >= 25 && resultado_num <= 29.9) {
      classificacion = "Sobre Peso";
    }else if (resultado_num >= 30 && resultado_num <= 34.9){
      classificacion = "Obesidad grado 1";
    }else if (resultado_num >= 35 && resultado_num <= 39.9){
      classificacion = "Obesidad grado 2";
    }else if (resultado_num >= 40){
      classificacion = "Obesidad morbida";
    }

    this.setState({classificacion: classificacion});
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
                  value={this.state.peso}
                  name="peso"
                  onChange={this.handleChange} />
          </div>

          <div>
            <label> Altura (cm) </label>
                <input type="number"
                      value={this.state.altura}
                      name="altura"
                      onChange={this.handleChange} />
          </div>
        
            <button type="submit">Submit</button>
            <h2> {this.state.resultado_num} </h2>
            <h2> {this.state.classificacion} </h2>
            <h2> {this.state.peso_sano} </h2>
          </form>
        </div>
      );
  }
}

export default App;