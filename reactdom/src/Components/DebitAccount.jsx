import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DebitAccount = (props) => {
    const handleForm = (event) => {
        event.preventDefault()

            const dateObj = new Date();
             // Convert the date object to a string in the format "MM/DD/YYYY" 
             //Str makes it into a string
            const dateStr = (dateObj.getMonth()+1)
             + "/" //DD
             + dateObj.getDate() 
             + "/"  //YY
            + dateObj.getFullYear();      
        
        
    let description = event.target[0].value // the index 0 is the first input you have in the form
    let amount = event.target[1].value //1 because we want the second input not the first
        const debit = {
            description, amount, dateStr
        }
        props.addDebit(debit)

        event.target.reset() //this sets all the input to empty and clears them
    }


    return (
        <div className="debit-container">
          <h1 className="heading" style={{fontStyle:"normal"}}>DEBIT ACCOUNT</h1>
          <div className="image-container">
            <img
              src="https://i0.wp.com/clark.com/wp-content/uploads/2021/11/IMG_2922.jpg?fit=1200%2C630&ssl=1"
              className="image"
              style={{maxWidth:"100%"}}
              alt="banking"
            />
          </div> <br/>
          <h1 style={{fontStyle:"italic", padding:"14px", paddingBottom:"35px"}}>Here, you can add deposits to your debit account.</h1>
          <form onSubmit={handleForm} className="form-container">
            <label>Add description:</label>
            <input placeholder="Add Description" type="text" className="input-field" style={{marginLeft:"10px"}}/>
    
            <label style={{marginLeft:"20px", marginRight:"7px"}}>Add funds:</label>
            <input placeholder="Add Debit" type="number" className="input-field" />
    
            <button type="submit" className="button submit-button" style={{marginLeft:"10px"}}>
              Submit
            </button>
          </form>
    
          <div className="credit-history">
            <h3>Your debit history can be found below</h3>
            {props.debitList.map((item, index) => (
              <div key={index} className="credit-item">
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
                <p>
                  <strong>Amount:</strong> {item.amount}
                </p>
                <p>
                  <strong>Date:</strong> {item.dateStr}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    

export default DebitAccount;