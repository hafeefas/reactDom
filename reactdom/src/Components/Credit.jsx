import React, {useEffect, useState} from "react";
import axios from 'axios';

const Credit = (props) => {
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
        const credit = {
            description, amount, dateStr
        }
        props.addCredit(credit)

        event.target.reset() //this sets all the input to empty and clears them
    }

    return (
        <div className="container">
          <h1 className="heading">CREDIT</h1>
          {/* <h2 className="subtitle">Welcome to your credits page! You can manage your transactions below</h2> */}
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1254993875/photo/cropped-image-of-business-woman-hand-working-laptop-computer-in-home-office.webp?b=1&s=170667a&w=0&k=20&c=knBGipYVyUge-Kjp6i_X-gP44HNPsd7GsIZ5hqx98Y8="
              className="image"
              style={{width:"800px"}}
              alt="banking"
            />
          </div>
          <form onSubmit={handleForm} className="form-container">
            <label>Add description:</label>
            <br />
            <input placeholder="Add Description" type="text" className="input-field" />
            <br />
            <label>Add funds:</label>
            <br />
            <input placeholder="Add Credit" type="number" className="input-field" />
            <br />
            <button type="submit" className="button submit-button">Submit</button>
          </form>

          <div className="credit-history">
            <h3>Your credit history:</h3>
            {props.creditList.map((item, index) => (
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
    
    export default Credit;
    