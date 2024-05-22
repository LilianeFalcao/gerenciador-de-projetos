import styled from "styled-components";

export default function Input({type, text, name, placeholder, handleOnChange, value}){
    
    const DIVs = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1em
    `

    const Input = styled.input`
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    `;

    const Label = styled.label`
        margin-top: .6em;
        margin-bottom: .6em;
        font-weight: bold;
    `;

    return(
        <DIVs>
            <Label htmlFor={name}>{text}</Label>
            <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </DIVs>
    );
}