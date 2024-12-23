import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles/BookingForm.css";
import { submitAPI } from "../data/api";
import Button from "./Button";


const BookingForm = ({availableTimes, dispatch}) => {

    const navigate = useNavigate();

    const [date, setDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [guest, setGuest] = useState('1');
    const [occasion, setOccasion] = useState('Select');


    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        // Dispatch an action to update available times
        dispatch({ type: 'UPDATE_TIMES', payload: new Date(selectedDate) });
    };

    const validateForm = (formData) => {
        const errorMessage = {
            date: "Please select a date!",
            selectedTime: "Please select a time!",
            guest: "Please choose number of guests",
            occasion: "Please select an occasion!"
        }

        let isValid = true;

        //Check if the date is selected
       if (!formData.date || formData.date === "") { 
        document.getElementById("res-date-error").textContent = errorMessage.date;
        isValid = false;
       }


        //Check if the time is selected
       if (!formData.selectedTime || formData.selectedTime === "") {
        document.getElementById("res-time-error").textContent = errorMessage.selectedTime;
        isValid = false;
       }

        //Check if guest is selected
       if (!formData.guest || formData.guest === "1") {
        document.getElementById("guests-error").textContent = errorMessage.guest;
        isValid = false;
       }

        //Check if occasion is selected
        if (!formData.occasion || formData.occasion === "" || formData.occasion === "Select") { 
            document.getElementById("occasion-error").textContent = errorMessage.occasion;
            isValid = false;
        }

        return isValid;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            selectedTime,
            guest,
            occasion,
        };
        
        const isValidationValid = validateForm(formData);

        if(isValidationValid) { 
            
            const isSubmitted = submitAPI(formData);

            if(isSubmitted) { 
            
                setDate('');
                setSelectedTime('');
                setGuest('1');
                setOccasion('Birthday');

            navigate("/booking-confirmation", { state: { bookingDetails: formData } });
            } 
            else 
            {  alert("Your submission was unsuccessful!"); }
        }
        // console.log('Form Submitted:', formData);
            
    };

    return(
        <>               
            <div className="booking-header">
                <h1>Book A Table</h1>
            </div>
            <div className="booking-main">
 
                <form className="booking-form" onSubmit={handleSubmit}>

                    <div className="form-item">
                        <label htmlFor="res-date">Choose Date</label>
                        <input 
                            type="date" 
                            id="res-date" 
                            value={date}
                            onChange={handleDateChange}
                        />
                        <span id="res-date-error"></span>
                    </div>

                    <div className="form-item">
                        <label htmlFor="res-time" aria-label="Choose Time">Choose Time</label>
                        <select 
                            id="res-time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}>
                                {Array.isArray(availableTimes) ? availableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>{availableTime}</option>
                                )) : <option disabled>Error: Available times data is invalid!</option>}
                        </select>
                        <span id="res-time-error"></span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="guests" aria-label="Number of guests">Number of guests</label>
                        <input 
                            type="number" 
                            placeholder="1" 
                            min="1" 
                            max="10" 
                            id="guests" 
                            value={guest}
                            onChange={(e) => setGuest(e.target.value)}
                            // onBlur={(e) => validateForm()}
                            />
                        <span id="guests-error"></span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="occasion" aria-label="Occasion">Occasion</label>
                        <select 
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}>
                            <option disabled>Select</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <span id="occasion-error"></span>
                    </div>
                    <div className="form-item">
                        <Button type="submit">Make Reservation</Button> 
                    </div>
                </form>
            </div>
        </>
    );

}

export default BookingForm;