import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DebitAccount = () => {
    const [debitCard, setDebitCard] = useState('')

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
                setDebitCard(result.data);
                console.log(result)

                const debitCard =result.data;
                setDebitCard(debitCard)
            }
                catch(error){
                    console.log(error)
                }
        }
        

    fetchData();
}, []); 

    return(

        <div>
            <h1> DEBIT </h1>
            <h1 style={{marginBottom:"60px"}}> Here's your debit card total: ${debitCard}</h1>
                <div style={{backgroundColor:"whitesmoke", padding:"20px"}}>
                    <img src="https://i0.wp.com/clark.com/wp-content/uploads/2021/11/IMG_2922.jpg?fit=1200%2C630&ssl=1"
                    style= {{width:"800px", borderRadius:"20px"}}/>
                </div>
            <br/>
            <button>Add more funds</button>

        </div>
    )
}

export default DebitAccount;