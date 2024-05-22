import React from "react";
import { NewProjectContainer, H, Paragrafo} from "./styled"
import ProjectForm from "../../project/ProjectForm"
import { useHistory } from "react-router-dom"

export default function novoProjeto(){

    //const history = useHistory();

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
        })
        .catch((err) => console.log(err))
    }

    return(
        <NewProjectContainer>
            <H> Criar Projeto </H>
            <Paragrafo>Crie projeto para depois adicionar os serviços</Paragrafo>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </NewProjectContainer>
    );
}