import React from "react";
import BookingForm from "../components/BookingForm";

const Booking = (props) => {
    return (
        <div className="bookingPage">     
            <h1>Please Make your Reservation</h1>            
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
    )
}

export default Booking;
