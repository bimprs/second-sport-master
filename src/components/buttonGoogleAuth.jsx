import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "gapi-script";
import React, { useState, useEffect } from 'react';

export default function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    role: "Customer",
  });

  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem("access_token", response.tokenObj.id_token);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, );

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://second-sport.herokuapp.com/api-docs/#/Auth/post_auth_register",
        data: dataRegister,
      });
      console.log(res.data);

      if (res.status === 201) {
        alert("Register berhasil, Silahkan Sign In untuk melanjutkan!");
        setDataRegister({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      if (error.code === "ERR_BAD_RESPONSE") {
        alert("data yang anda masukan salah");
      }

      if (error.code === "ERR_BAD_REQUEST") {
        alert("Email already exists");
        setDataRegister({
          email: "",
          password: "",
        });
      }
    }
  };

  return (
    
                <GoogleLogin
                  clientId="244205007996-2qn8pqps20lliai7gi5ephc45fpovqmn.apps.googleusercontent.com"
                  buttonText="Sign In With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
  );
}