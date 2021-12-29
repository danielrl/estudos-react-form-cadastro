import React, { Component } from 'react';
import { Typography, Container } from '@material-ui/core';
import "@fontsource/roboto/300.css";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }

}

function validarCPF(numeroCPF) {
  if (numeroCPF.length !== 11) {
    return { valido: false, texto: "O número do CPF precisa ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
