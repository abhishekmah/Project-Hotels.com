import React, {useState} from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import styled from 'styled-components'
import { HRLine } from '../../Components/HorizontalLine/HRLine'
import { FaApple } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {Link} from 'react-router-dom'


const Container = styled.div`
background-color: #eee;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #252525;


`
const Form = styled.div`
margin: 1.5rem;
width: 25%;
padding: 2rem;
background-color: white;
border: 1px solid #bbb;
font-size: 14px;
input[type="text"]{
width: 100%;
height: 2rem;
}
.signup{
    color: steelblue;
}

`

const Button = styled.div`
width: 100%;
color: ${props=>props.color};
background-color: ${props=>props.bg};
padding: 0.8rem 0;
margin: 1rem 0;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
:hover{
    filter: brightness(80%);
    cursor: pointer;
}
`
const Signin = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCheck = (e) => {
        e.preventDefault();
        let payload = {
            email,
            password,
        }
        handleLogin(payload);
    }
    return (
        <div>
            {/* <Navbar /> */}
            <HRLine color="#d32f2f"/>
            <Container>
                <Form>
                    <h2>Signin</h2><br />
                    <label htmlFor="">Email address</label><br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> <br /><br />

                    <input type="checkbox" /> Sign me in automatically next time<br /><br />

                    <label htmlFor="">Password</label><br />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
                    
                    <p>Forgot your password?</p>
                    <Button onClick={handleCheck} color="white" bg="#1963a0">Sign in</Button> <br />
                    <p>Don't have an acount? <Link to="/signup"><span className="signup">Signup</span></Link></p> <br />
                    <p>Find your booking using your confirmation number</p> <br />
                    <HRLine /> <br />
                    <Button color="white" bg="#000"><FaApple/> &nbsp; Sign in with apple</Button>
                    <Button color="white" bg="#1760ce"><AiFillFacebook />&nbsp; Sign in with Facebook</Button>
                    <p>We’ll never post to Facebook without your permission
                    </p> <br />
                    <HRLine /> <br />

                    <h3><FcGoogle/> Looing to signin with google?</h3> <br />
                    <p>We no longer offer that option. But if you have an existing Google account, we’ll ask you to create a new password. That way, you’ll have direct access to your Hotels.com account whenever you sign in.</p>
                    <br />
                    <p className="signup">Create password</p> <br />
                    <HRLine /> <br />
                    <p>Are you a travel agent?</p>
                    <p>Please visit <span className="signup">travel agency platform </span></p>
                </Form>

            </Container>
            
        </div>
    )
}

export  {Signin}
