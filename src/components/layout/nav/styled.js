import styled from "styled-components";

export const Logo = styled.img`
    width: 65px;
    height: 100px
    color: white;
    filter: invert(1);
`
export const Bar = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #222;
    padding:1em;
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`

export const Item = styled.li`
    margin-right: 1em;
    text-decoration: none;
    color: white;
    &:hover {
        color: #f18631;
      }
`
