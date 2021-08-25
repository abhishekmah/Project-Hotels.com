import React from 'react'
import styled from 'styled-components'
import { IoShieldCheckmarkSharp,IoWater } from 'react-icons/io5';
import { IoMdMan } from 'react-icons/io';
import { RiHandSanitizerFill } from 'react-icons/ri';



const Card = styled.div`
padding: 1rem;

`
const CardContent = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`

const Content = styled.div`
margin: 1rem;
&>div{
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        display: flex;
        align-items: center;
    justify-content: center;
        font-size: 20px;
        background-color: #eee;
        border-radius: 50%;
        height: 40px;
        width: 40px;
    }
}
.content{
    margin-left: 1.2rem;
    h3{
        font-size: 17px;
    }
    p{
        font-size: 13px;
        font-weight: 400;
    }
}
`

const TravelWithConfidence = () => {

    return (
        <Card>
            <h2>Travel with confidence</h2>
            <p>Many properties have updated us about their enhanced health and safety measures. So, during your search, you may find details like:</p>
            <CardContent>
                <Content>
                    <div>
                       <span> <IoShieldCheckmarkSharp /></span>
                        <div className="content">
                        <h3>Official health standards</h3>
                        <p>Properties adhering to corporate/organisational sanitisation guidelines.</p>
                        </div>
                    </div>
                </Content>
                <Content>
                    <div>
                        <span><IoMdMan /></span>
                        <div className="content">
                        <h3>Social distancing
</h3>
                        <p>Contactless check-in and check-out along with other social distancing<br/> measures.</p>
                        </div>
                    </div>
                </Content>

            </CardContent>
            <CardContent>
                <Content>
                    <div>
                        <span><RiHandSanitizerFill /></span>
                        <div className="content">
                        <h3>Hygiene and sanitisation</h3>
                        <p>The use of disinfectant and whether properties enforce a gap period <br/>between stays.</p>
                        </div>
                    </div>
                </Content>
                <Content>
                    <div>
                        <span><IoWater /></span>
                        <div className="content">
                        <h3>Essentials at the property</h3>
                        <p>Free hand sanitiser for guests and individually wrapped food options.</p>
                        </div>
                    </div>
                </Content>

            </CardContent>
        </Card>
    )
}

export  {TravelWithConfidence}
