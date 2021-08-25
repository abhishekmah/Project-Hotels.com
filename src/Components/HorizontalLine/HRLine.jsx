import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
height: ${props=> props.height === undefined ? "1px" : props.height};
background-color: ${props=> props.color === undefined ? "#ddd" : props.color};
width: ${props=>props.width === undefined ? "100%" : props.width};
margin: auto;
`


const HRLine = ({width,color,height}) => {
    return (
        <div>
            <Line width={width} color={color} height={height}/>
        </div>
    )
}

export  {HRLine}
