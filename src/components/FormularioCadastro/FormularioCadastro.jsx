import React, { useState } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                let dados = { nome, sobrenome, cpf, promocoes, novidades }
                aoEnviar(dados);
            }}>

            <TextField
                id="nome"
                value={nome}
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => {
                    setNome(event.target.value);
                }} />

            <TextField
                id="sobrenome"
                value={sobrenome}
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }} />

            <TextField
                id="cpf"
                value={cpf}
                label="CPF"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event) => {
                    const retornoValidacao = validarCPF(cpf);
                    setErros({ cpf: retornoValidacao });
                }}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => {
                    setCpf(event.target.value);
                }} />

            <FormControlLabel
                label="Promoções"
                control={<Switch
                    name="promocoes"
                    color="primary"
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked);
                    }}
                />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    name="novidades"
                    color="primary"
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                />}
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
