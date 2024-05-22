import styled from "styled-components";

export default function Select({text, name, options, handleOnChange, value}){
    
    const DIVs = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1em
    `

    const Selec = styled.select`
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        margin-bottom: .8em
    `;

    const Label = styled.label`
        margin-top: .6em;
        margin-bottom: .6em;
        font-weight: bold;
    `;

    return(
        <DIVs>
            <Label htmlFor={name}>{text}</Label>
            <Selec name={name} id={name}>
                <option disabled selected >Selecione um opção</option>
                {options.map((option) =>(
                    <option 
                        value={option.id} 
                        key={option.id} >  {option.name}  </option>
                ))}
            </Selec>
        </DIVs>
    );
}