import React from "react"
import { HomeContainer , H, SP, Paragrafo} from "./styled"
import LinkBotao from "../../layout/linkButton/LinkBotao"

export default function Home(){
    return (
        <HomeContainer>
            <H>Bem-vindo ao <SP>Karasuno</SP>  </H>
            <Paragrafo>Genrencie seu projeto aqui mesmo!</Paragrafo>
            <LinkBotao to="../newProjects" text="Criar novo projeto"/>
        </HomeContainer>
    )
}