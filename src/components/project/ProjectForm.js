import React, { useEffect, useState} from "react";
import styled from 'styled-components';
import Input from "../form/input";
import Select from "../form/select";
import Button from "../form/submitButton";

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


const Form = ({btnText, handleSubmit, projectData}) => {

  const [categoria, setCategoria] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() =>{
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then((resp) => resp.json())
    .then((data) =>{
        setCategoria(data)
    })
    .catch((err) => console.log(err))
  }, [])

  const submit = (e) =>{
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({...project, [ e.target.name ]: e.target.value })
    console.log(project)
  }
  return (
    <FormContainer>
      <h1>Formulário de Projetos</h1>
      <form onSubmit={submit}>
        <Input
          type= "text" 
          name="name"
          text="Nome do projeto"
          placeholder="Insira o nome do projeto" 
          handleOnChange={handleChange}
        />
        <Input
          type= "number" 
          name="budget"
          text="Orçamento do projeto"
          placeholder="Insira o orçamento total" 
          handleOnChange={handleChange}
        />
        <Select
          name="categoria_id"
          text="Selecione uma Categoria"
          options={categoria}
        />
        <Button text={btnText}/>
      </form>
    </FormContainer>
  );
};

export default Form;