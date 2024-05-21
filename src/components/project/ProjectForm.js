import React from "react";
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #222;
  color: #f18631;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f18631;
    color:#222
  }
`;

const Selec = styled.select`
  margin-bottom: .8em
`;


const Form = () => {

  return (
    <FormContainer>
      <h1>Formulário de Projetos</h1>
      <form >
        <Input
          type="text"
          name="nome"
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          name="number"
          placeholder="insira o orçamento total"
        />
        <Selec name="categoria-id">
            <option>Selecione a categoria</option>
            <option>TI</option>
        </Selec>
        <Button type="submit">Enviar</Button>
      </form>
    </FormContainer>
  );
};

export default Form;