import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
margin: 0.8rem 0.25rem 0.6rem 0.25rem;
padding: 0.25rem;
img{
    width: 350px;
    border-radius: 0.4rem;
}
p{
    font-weight: 600;
    margin: 0.2rem 0;
}
span{
    font-size: 14px;
    font-weight: 400;
}

`

const CardWide = ({children}) => {
    return (
        <Card>
            {children}
        </Card>
    )
}

export  {CardWide}
