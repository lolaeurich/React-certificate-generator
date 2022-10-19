import React, { Component } from "react"
import { exportComponentAsPNG } from "react-component-export-image"
import certificator from "../src/assets/certificator.png"

class App extends Component {

  certificateWrapper = React.createRef()
  state = {
    Curse: "",
    Congratulations: "",
    Name: "",
    Thanks: "",
    Signature: ""
  }

    constructor(props){
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        }) 
        console.log(this.state.file)
    }

  render() {

    return (

      <div className="App">
        <div className="Meta">
          <h1>Gerador de Certificado</h1>

          <p>Curso concluído:</p>
          <input
            type="text"
            placeholder="Digite o nome do curso aqui..."
            value={this.state.Curse}
            onChange={(e) => {
              this.setState({ Curse: e.target.value });
            }}
          />

          <p>Mensagem de parabenização:</p>
          <input
            type="text"
            placeholder="Digite aqui sua mensagem..."
            value={this.state.Congratulations}
            onChange={(e) => {
              this.setState({ Congratulations: e.target.value });
            }}
          />

          <p>Digite o seu nome completo:</p>
          <input
            type="text"
            placeholder="Digite o seu nome aqui..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />

          <p>Mensagem de agradecimento:</p>
          <input
            type="text"
            placeholder="Digite aqui sua mensage..."
            value={this.state.Thanks}
            onChange={(e) => {
              this.setState({ Thanks: e.target.value });
            }}
          />

          <p>Nome do assinante:</p>
          <input
            type="text"
            placeholder="Quem assina este certificado?"
            value={this.state.Signature}
            onChange={(e) => {
              this.setState({ Signature: e.target.value });
            }}
          />

          <p>Carregue a sua logo:</p>
          <input 
            type="file" 
            placeholder="Selecione a sua logo..." 
            onChange={this.handleChange}/>

          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p className="Curse">{this.state.Curse}</p>
            <p className="Congratulations">{this.state.Congratulations}</p>
            <p className="Name">{this.state.Name}</p>
            <p className="Thanks">{this.state.Thanks}</p>
            <p className="Signature">{this.state.Signature}</p>
            <img className="Logo" src={this.state.file} alt=""/>
            {console.log(this.state.file)}
            <img className ="Certificate" src={certificator} alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

