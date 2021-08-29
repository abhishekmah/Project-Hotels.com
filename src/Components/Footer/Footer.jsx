import React from 'react'
import { CustomizedAccordions } from './Accordion'
import styled from 'styled-components'

const Container = styled.div`
margin: 1rem 0;
width: 80%;
margin: auto;

.Footer__links{
    p{

        margin: 1.5rem 1rem;
    }
}
.Footer__guidelines{
    margin-left: 1rem;
    p{
        font-size: 11px;
        padding: 4px 0;
    }
}
`

const Footer = () => {
    return (
        <Container>
            <CustomizedAccordions />
            <div className="Footer__links">
                <p>Website feedback</p>
                <p>About us</p>
                <p>List your property</p>
                <p>Careers</p>
                <p>Travel Guides</p>
                <p>Site index</p>
            </div>
            <div className="Footer__guidelines">
                <img src="https://a.cdn-hotels.com/kesstatic/3fdde48fcdd669e08354.svg" alt="" width="100px"/>
                <p>* Some hotels require you to cancel more than 24 hours before check-in. Details on site.</p>
                <p>* The value of 1 reward night is the average price of the 10 stamps you collect. Excludes taxes and fees. A Rs.300.00 redemption fee is charged for each reward night redeemed unless you redeem on our app. Exclusions apply. See terms and conditions.</p><br />
                <p>© 2021 Hotels.com is an Expedia Group company. All rights reserved.</p>
                <p>Hotels.com and the Hotels.com logo are trademarks or registered trademarks of Hotels.com, LP in the United States and/ or other countries. All other trademarks are the property of their respective owners.</p>
            </div>
        </Container>
    )
}

export  {Footer}
