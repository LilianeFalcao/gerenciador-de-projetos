import { Link } from "react-router-dom";
import Container from "../Container";
import {List, Logo, Bar, Item} from "./styled"
import styled from "styled-components"
import logo from "../../../img/LogoKarasuno.png"

export default function NavBar(){

    return(    
    <Bar>
        <Container>
            <Link>
                <Logo src={logo} alt=" karasuno"/>
            </Link>
            <List>
                <Item>
                    <LinkStyled  to="/">Home</LinkStyled >
                </Item>
                <Item>
                    <LinkStyled  to="/projeto">Projetos</LinkStyled >
                </Item>
                <Item>
                    <LinkStyled  to="/empresa">Empresa</LinkStyled >
                </Item>
                <Item >
                    <LinkStyled  to="/contato">Contato</LinkStyled >
                </Item>
            </List>
        </Container>
       
    </Bar>
    );
}
const LinkStyled = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: #f18631;
    }
`;
