import React, {useState, useEffect} from 'react'
import './App.css';
import Home from './Components/Home';
import DebitAccount from './Components/DebitAccount';
import Credit from './Components/Credit'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [debit, setDebit] = useState(null) //set to null because we wait for fetch, then the value will be updated after that. if it cant be fetched it returns a 'NaN' (not a number)
  const [credit, setCredit] = useState(null);
  //you use state because you can use for example setCredit to update credit. useState is used for updating things. this can also be seen when doing line 23
  const [balance, setBalance] = useState(0)
  const [debitList, setDebitList] = useState([]) //this is here to store the values of inputs
  const [creditList, setCreditList] = useState([]) 

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
                //updating the debit state with the fetched data
                setDebit(result.data);
                console.log(result)

                // const debit =result.data;
                // setDebit(debit)

                const creditResult = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
                    setCredit(creditResult.data)
                    console.log(creditResult)
                    // const credit = creditResult.data;
                    // setCredit(credit);
                    //the Number will make the creditres and res into numbers instead of null
                 setBalance(Number(creditResult.data-result.data));   
            }
                catch(error){
                    console.log(error)
                    alert("error, please try again.")
                }
        }
        //when the component mounts, call the fetchData function
    fetchData();
}, []); 

    const addDebit = (debit) => {
        setDebit((previousDebit) => 
        //this will be returned
        //previous debit is the previous value of debit. this can be named anything
          Number(previousDebit) + Number(debit.amount)
        ) 
        setBalance((previousBalance) => 
        //debit.amount is already set to a number because it comes after prevoiusBalance which is a number
          previousBalance - debit.amount    
        )
        setDebitList([...debitList, debit]) //cloned the old array and then added debit to the end of the array


    }
      const addCredit = (credit) => {
        setCredit((previousCredit) => 
        //this will be returned
        //previous credit is the previous value of debit. this can be named anything
          Number(previousCredit) + Number(credit.amount)
        ) 
        setBalance((previousBalance) => 
        //adding is different than subtracting from before because when u add to a string its like ur combining the 2 strings
          Number(previousBalance) + Number(credit.amount)    
        )
        setCreditList([...creditList, credit]) //cloned the old array and then added debit to the end of the array
  }
            
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li className="links">
              <section className="links">
                <button className = "button"><Link to = "/reactDom/" className="link">Home</Link> </button>
                <button className = "button"><Link to = "/reactDom/DebitAccount/" className="link">Debit</Link></button>
                <button className = "button"><Link to = "/reactDom/Credit" className="link"> Credit </Link></button>
              </section>
            </li>
          </ul>
        </nav>
        
        {credit !== null && debit !== null ? (
          //it needs the div here or else it wont work!!
          <div className = "balance">
            <p className="block debit"> Debit: ${Number(debit).toFixed(2)}</p>
            <p className="block balance"> Balance: ${balance.toFixed(2)} </p> 
            <p className="block credit"> Credit: ${Number(credit).toFixed(2)}</p>
          </div>
          ) : (
            <p> Error, please try again </p>
          ) 
          }

          <Routes>
            <Route path = "/reactDom/" element= {<Home/>} /> 
            <Route path = "/reactDom/DebitAccount/*" element= {<DebitAccount debitList= {debitList} addDebit = {addDebit} />}  /> 
            <Route path = "/reactDom/Credit/*" element = {<Credit  creditList={creditList} addCredit={addCredit} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;


