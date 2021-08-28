import React from 'react'
import styled from 'styled-components'
import { Button } from '../../Components/Button/Button'
import { BiCheck } from 'react-icons/bi';
const Reward = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
    & >div.left {
        img{
        width: 320px;
        margin-right: 2rem;
    }
    p{
        font-size: 13px;
        color: blue;
    }

}
    .right{
        img{
            width: 150px;
            margin-bottom: 1rem;
        }
        p{
            font-size: 14px;
            margin: 0.3rem 0;
            span{
                font-weight: bold;
            }
        }
    }
.buttons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
}

`

const Rewards = () => {
    return (
        <Reward>
            <div className="left">

            <img src="https://a.cdn-hotels.com/kesstatic/f6d44ef153d84fa217f3.svg" alt="" />
            <p>*See further details</p>
            </div>
            <div className="right">
                <img src="https://a.cdn-hotels.com/kesstatic/16cb9904184e8e153945.png" alt="" />
                <p><BiCheck/><span>Unlock Secret Prices!</span> You could get 10% off</p>
                <p><BiCheck/><span>Get 1 reward night*</span> for every 10 nights you stay Find out more</p>
                <p><BiCheck/><span>Rack up rewards</span> in over 1,000,000 properties worldwide</p>
                <div className="buttons">
                    <Button bg="royalblue" color="white">JOIN NOW</Button>
                    <Button bg="white" color="royalblue">SIGN IN</Button>
                </div>
            </div>
        </Reward>
    )
}

export  {Rewards}
