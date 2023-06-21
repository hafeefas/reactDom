import React, {useEffect, useState} from "react";
import axios from 'axios';

const Credit = () => {
    const [credit, setCredit] = useState('');

    useEffect(() => {
        async function fetchData (){

            try{ 
                const creditResult = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
                setCredit(creditResult.data)
                console.log(creditResult)
                const credit = creditResult.data;
                setCredit(credit);
            
        } catch(error){
            console.log(error)
            alert("there seems to be an error. please try again.")
        }
    }
        
    fetchData();
},[])
    

    return(
        <div>
            <h1> CREDIT </h1>
            <h1 style={{marginBottom:"50px"}}> Here's your credit statement: ${credit} </h1>
                <div style={{backgroundColor:"whitesmoke", padding:"20px"}}>
                    <img src="https://media.istockphoto.com/id/1254993875/photo/cropped-image-of-business-woman-hand-working-laptop-computer-in-home-office.webp?b=1&s=170667a&w=0&k=20&c=knBGipYVyUge-Kjp6i_X-gP44HNPsd7GsIZ5hqx98Y8=" style={{width:"600px", borderRadius:"20px"}}/>
                </div>
        </div>
    )
}

export default Credit;