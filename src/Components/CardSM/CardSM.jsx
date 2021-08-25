import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
margin: 0.5rem 0.25rem;
padding: 0.25rem;
img{
    width: 180px;
    border-radius: 0.2rem;
}
p{
    font-weight: 600;
    margin: 0.2rem 0;
}
`

const CardSM = () => {
    return (
        <Card>
            <img src="https://mediaim.expedia.com/destination/1/b29d96f82af39a8a799e486a4f5be226.jpg?impolicy=fcrop&w=179&h=101&q=high" alt="" />
            <p>Puri</p>
        </Card>
    )
}

export  {CardSM}
