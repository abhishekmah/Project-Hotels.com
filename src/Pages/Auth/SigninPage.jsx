import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../Auth/action";
import { Redirect } from "react-router-dom";
import {Signin} from "./Signin";
import {getData} from "../../Utils/localStorage";

const SigninPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const handleLogin = ({ email, password }) => {
    let data = getData("data");
    console.log(data)
    let count = 0;
    for(let i=0; i<data.length; i++){

      if (email === data[i].email && password === data[i].password) {
        count++;
      } 
    }
    if(count != 0){
      const action = loginSuccess("fake Token");
        dispatch(action);
        alert("You are logged in !!");
    }
   else {
      const action = loginFailure("Invalid Credentials");
      dispatch(action);
      alert("Invalid Credentials !!");
    }
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Signin handleLogin={handleLogin} />
    </div>
  );
};

export {SigninPage};
