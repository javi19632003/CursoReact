import styled from 'styled-components';

const ButtonStyled = styled.button`
color: blue;
font-size: 2em;
margin: 0.2em;
padding: 0.25em 1em;
border: 1px solid ;
border-radius: 1px;

&:hover{
    background/color: #33333
}


`

export default function Button({ text }) {
    return( 
    <>       
        <ButtonStyled>{text}</ButtonStyled>  
    </>
    )
}

