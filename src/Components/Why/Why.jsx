import React from 'react'
import styled from 'styled-components'
import { BiCalendarCheck } from 'react-icons/bi';
import { HiBadgeCheck,HiMoon } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';


const WhyBook = styled.div`
margin: 1rem;

.CardContent,.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;

    
}
@media only screen and (max-width:799px){
        .CardContent,.content{
            flex-direction: column;
        }
    }


.icon{
    display: flex;
    justify-content: center;
    align-items: center;
   
    height: 40px;
    width: 40px;
    margin-right: 0.5rem;
    font-size: 20px;
    border-radius: 50%;
    
}
.icon1{
 background-color: #f4fff4;
 color: green;
}
.icon2{
background-color: #e8e9fd;
 color: navy;
}
.icon3{
background-color: #fce3fa;
 color: purple;
}
.texts > p{
    margin-bottom: 0.2rem;
    font-weight: bold;
    font-size: 17px;
        

}
.texts1 > p{
color: green;
}
.texts2 > p{
color: navy;
}
.texts3 > p{
color: purple;
}
.texts > span{
font-weight: 400;
font-size: 14px;
}

`

const Why = () => {
    return (
        <WhyBook>
            <h2>Why book with Hotels.com?</h2>
            <div className="CardContent">
                <div className="content">
                    <div className="icon icon1">

                    <BiCalendarCheck />
                    </div>
                    <div className="texts texts1">
                        <p>Free cancellation</p>
                        <span>on most hotels*</span>
                    </div>
                </div>
                <div className="content">
                    <div className="icon icon2">

                    <HiBadgeCheck />
                    </div>
                    <div className="texts texts2">
                        <p>
Our price guarantee</p>
                        <span>find out more <MdKeyboardArrowRight/></span>
                    </div>
                </div>
                <div className="content">
                    <div className="icon icon3">

                    <HiMoon />
                    </div>
                    <div className="texts texts3">
                        <p>Get a reward night</p>
                        <span>for every 10 night you stay <MdKeyboardArrowRight/></span>
                    </div>
                </div>
            </div>
            
        </WhyBook>
    )
}

export  {Why}
