import React,{useState} from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import styled from 'styled-components'
import { HRLine } from '../../Components/HorizontalLine/HRLine'
import { FaApple } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Footer } from '../../Components/Footer/Footer';
import {Link} from 'react-router-dom'
import { getData, setData } from '../../Utils/localStorage';

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
:focus{
outline: 1px solid steelblue;
}
}
.signup{
    color: steelblue;
    text-decoration: none;
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
const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            email,
            password,
            first,
            last,
        }

        let data = getData("data");
        if(data == null)
        {
            data = [];
        }
        if(email !== "" && password !== "" && first !== "" && last !== ""){
            data.push(payload)
            setData("data", data);
            alert("Account has been created !!");
        }

        // console.log(data);

    }
    return (
        <div>
            <Navbar />
            <HRLine color="#d32f2f"/>
            <Container>
                <Form >
                    <h2>Create an account</h2><br />
                    <Button color="white" bg="#000"><FaApple/> &nbsp; Sign in with apple</Button> 
                    <Button color="white" bg="#1760ce"><AiFillFacebook />&nbsp; Sign in with Facebook</Button>
                    <p>We’ll never post to Facebook without your permission
                    </p> <br />
                    <HRLine /> <br />
                    <label htmlFor="">Email address</label><br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> <br /><br />
                    
                    <label htmlFor="">Password</label><br />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />

                    <label htmlFor="">Firstname</label><br />
                    <input type="text" value={first} onChange={(e) => setFirst(e.target.value)}/><br /><br />

                    <label htmlFor="">Lastname</label><br />
                    <input type="text" value={last} onChange={(e) => setLast(e.target.value)}/><br /><br />

                    <input type="checkbox" /> Keep me signed in<br /><br />
                    <input type="checkbox" checked/> Please email me great deals, last-minute offers and information about hotels<br /><br />

                    <p>By signing up you accept the <span className="signup">Terms and Conditions</span> and <span className="signup">Privacy Statement</span></p>
                    <Button onClick={handleSubmit} color="white" bg="#1963a0">Create account</Button> <br />
                
                    <p>Already have an account? <Link to="/signin"><span className="signup">Signin </span> </Link></p>
                </Form>

            </Container>
            
        </div>
    )
}

export  {Signup}
