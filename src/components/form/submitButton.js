import styled from "styled-components";

export default function Button({text}){
    
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
    return(
        <Button>{text}</Button>
    );
}