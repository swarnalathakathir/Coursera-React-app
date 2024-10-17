import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import restaurant from "../assets/restaurant.jpg"

const BookingForm = (props) => {  
   const navigate = useNavigate();
   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   navigate("/confirmation")
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    
      <div className="container">
        <div className="bookingForm">
        <img src={restaurant} alt="restaurant"/>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>        
        </div>        
      </div>
    
  );
};

export default BookingForm;