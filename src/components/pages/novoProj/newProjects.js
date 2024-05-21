import React from "react";
import { NewProjectContainer, H, Paragrafo} from "./styled"
import ProjectForm from "../../project/ProjectForm"

export default function novoProjeto(){
    return(
        <NewProjectContainer>
            <H> Criar Projeto </H>
            <Paragrafo>Crie projeto para depois adicionar os serviços</Paragrafo>
            <ProjectForm />
        </NewProjectContainer>
    );
}