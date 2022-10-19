import React, { Component } from "react"
import { exportComponentAsPNG } from "react-component-export-image"

class App extends Component {

  certificateWrapper = React.createRef()
  state = {
    Curse: "",
    Congratulations: "",
    Name: "",
    Thanks: "",
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

          <p>Informe a URL da sua logo:</p>
          <input type="file" p
          laceholder="Selecione a sua logo..." 
          value={this.state.Logo} 
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
            <img className="Logo" alt="">{this.state.File}</img>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-empty-2-design-template-072e88bdcc0fa0d50289b8a5ac857ec7_screen.jpg?ts=1631689062" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

