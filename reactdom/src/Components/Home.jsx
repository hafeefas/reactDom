import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return(
    <div>

        <h1 style={{marginBottom:"40px"}}> Welcome to your home page. Where would you like to visit?</h1>

        <img src ='https://st3.depositphotos.com/3591429/13203/i/450/depositphotos_132036332-stock-photo-women-working-with-computer.jpg' style={{width:"100", borderRadius:"20px"}}/>
        <div class="container">
        <p style={{padding:"50px" , fontSize:"20px"}}>
            Welcome to our online banking platform! With our bank account services, 
            you have full control over your funds, allowing you to manage your 
            finances conveniently from the comfort of your own home.
        <br/>  <br/>
        If you have any questions or encounter any issues while using our bank 
            account services, our dedicated customer support team is available to 
            assist you. Whether you need help with account management, transaction
             inquiries, or technical support, we are here to provide you with prompt
              and reliable assistance.
              </p>
        </div>

    </div>
    )
}

export default Home;