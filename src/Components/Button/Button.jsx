import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
margin: 0.2rem;
padding: 0.5rem 1.5rem;
background-color: ${props=>props.bg};
color: ${props => props.color};
border-radius: 1.5rem;
border: ${(props) => props.border === undefined ? 0 : props.border};
outline: 0;
font-weight: 600;
text-align: center;
display: inline-block;

:hover{
   
    cursor: pointer;
}

`

const Button = ({children,bg,color,border}) => {
    return (
        <Buttons bg={bg} color={color} border={border}>
            {children}
        </Buttons>
    )
}

export  {Button}
