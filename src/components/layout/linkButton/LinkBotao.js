import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

export default function LinkBotao({to, text}){
    return(
        <LinkStyled to={to}>
            {text}
        </LinkStyled>
    );
}

const LinkStyled = styled(Link)`
    background-color: #222;
    color: #fff;
    padding: 0.5em 1em;
    text-decoration: none;
    &:hover {
        color: #f18631;
    }
`;