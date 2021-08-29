import React from 'react'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { HRLine } from '../../Components/HorizontalLine/HRLine'
import styles from './Payment.module.css'


const BodyContent = styled.div`
background-color: whitesmoke;
margin-top: 5px;
`


const Navbar = styled.div`
display: flex;
/* padding: 0.5rem 1.5rem ; */
justify-content: space-around;
align-items: center;
box-shadow: 0 3px 5px #ddd;
color: #d32f2f;

`


const Contents = styled.div`
margin: 1.5rem;
width: 90%;
margin: auto;
display: flex;
justify-content: center;
padding-top: 1.5rem;

`

const Card = styled.div`
position: relative;
margin: 1rem 0;
border: 1px solid #ddd;
background-color: white;
padding: 1.5rem;
h3,h4,p,span{
    color: #252525;
}
span{
    font-size: 12px;
}
p{
    font-size: 14px;
}
input[type="text"],select{
    height: 35px;
    width: 250px;
}
.blue{
    color: steelblue;
    text-decoration: none;
}
.CardBox{
    input[type="text"]{
    width: 50px;
    }
}
button{
    background-color: steelblue;
    color: white;
    padding: 0.4rem 1rem;
    border: none;
    font-size: 22px;
    font-weight: bold;
    margin: 0.5rem;
    
    position: absolute;
    bottom: 10px;
    right: 10px;

}
button:hover{
    filter: brightness(110%);
    cursor: pointer;
}
`

const Payment = () => {

    const [booked,setBooked] = useState(false)

    const handleBook = () => {
        alert("hotel booked")
        setBooked(true)
    }
    if (booked) {
        return <Redirect to="/" / >
    }
    return (
        <div>
            
            <Navbar>
               <Link to="/"> <img src="./images/hotels-logo1.png" height="40px" alt="logo" /></Link>
                <div className={styles.menu}>
                    <p>Website</p>
                    <p>Help</p>
                </div>
            </Navbar>
            <BodyContent>
                <Contents>
                    <div className={styles.left}>
                        <h1>Moxy NYC Times Square</h1><br />
                        <Card>

                            <h3>Step 1: Your details</h3><br />
                            <HRLine /><br />
                            <span>Please tell us the name of the guest staying at the hotel as it appears on the ID that they’ll present at check-in. If the guest has more than one last name, please enter them all.

                                <br /> *required fields</span> <br /><br />
                            
                    <h4>Firstname</h4>
                    <input type="text" /><br /><br />
                    <h4>Lastname</h4>
                            <input type="text" /><br /><br />
                            <h4>Email address</h4>
                    <input type="text" /> <br /><br />
                    
                    <h4>Password</h4>
                            <input type="text" /><br /><br />
                              <p> <input type="checkbox" checked/> Please email me great deals, last-minute offers and information about properties</p>
                            
                        </Card>

                        <Card>
                            <h3>Step 2: Room details</h3><br />
                            <HRLine /><br />
                            <h3>Property amenities</h3>
                            <div className={styles.Facility}>
                                <p>Free WiF</p>
                                <p>Pet-friendly</p>
                                <p>Gym</p>
                                <p>Non-smoking</p>
                                <p>Restauran</p>
                                <p>Bar</p>
                            </div>
                            <h4>Room, Multiple Beds, Non Smoking - Adults: 4, Children: 0</h4><br />
                            <div className={styles.facility2}>
                                <h5>Included in your room:</h5> 
                                <p>Free WiFi</p>
                                <p>4 Twin Beds</p>
                                <p>Non Smoking</p>
                                

                            </div>
                            <p className="blue">Any special request?</p>
                            <p className="blue">Any accesibility request?</p>
                        </Card>
                        <Card>
                            <h3>Step 3: Payment details</h3> <span>Your booking is safe and secure.</span><br />
                            <HRLine /><br />
                            <div className={styles.step3}>
                                <div className={styles.step3Left}>
                                    <h4>Firstname</h4>
                    <input type="text" /><br /><br />
                    <h4>Lastname</h4>
                            <input type="text" /><br /><br />
                            <h4>Card tyle</h4>
                                    <select name="" id="">
                                        <option value="">American express</option>
                                        <option value="">Master Card</option>
                                        <option value="">Visa</option>
                                        <option value="">Visa Election</option>
                                    </select><br /><br />
                                     <h4>Card Number</h4>
                                    <input type="text" placeholder="0000 0000 0000 0000" /><br /><br />
                                    <h4>Expary Date</h4>
                                    <span className="CardBox"><input type="text" name="" id="" placeholder="MM"/></span> / <span className="CardBox"><input type="text" name="" id="" placeholder="YY"/></span>
                                   <br /> <h4>Security Code</h4>
                                    <span className="CardBox"><input type="text" placeholder="000"/></span>
                            </div>
                                <div className={styles.step3Right}>
                                    <h3>We accept the following payment methods</h3>
                                
                                    <img src="./images/cards.png" alt="" />
                                    <div className={styles.step3RightBox}>
                                        <h4>You can count on us</h4>
                                        <p>We use secure transmission</p>
                                        <p>We protect your personal information</p>
                                    </div>
                                    
                            </div>
                            </div>
                        </Card>
                        <Card>
                            <br />
                            <HRLine />
                            <br />
                            <h4>Nearly there! This is the final step.</h4>
                            <h4>Cancel for free if plans change</h4>
                            <h4>Price Guarantee</h4><br />
                            <h3>Terms of Booking</h3>
                            <p>By clicking "Book", you agree you have read and accept our <span className="blue"> Terms and Conditions , Privacy Policy and Government Travel Advice </span></p>
                            <div>
                                <button onClick={handleBook}>Book</button>
                                </div>
                        </Card>
                    </div>
                    {/* <div className={styles.right}>
                        <p>Our Price Guarantee promise</p>
                    </div> */}
                </Contents>

            </BodyContent>
            
        </div>
    )
}

export  {Payment}
