import React, {useState} from "react";
import "./styles/BookingForm.css";

const BookingForm = ({availableTimes, dispatch}) => {

    const [date, setDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [guest, setGuest] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');

    const handleSubmit = (e) => {
        e.preventDefault();

        setDate('');
        setSelectedTime('');
        setGuest('1');
        setOccasion('Birthday');

        const formData = {
            date,
            selectedTime,
            guest,
            occasion,
        };
    
        console.log('Form Submitted:', formData);

 
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        // Dispatch an action to update available times
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    return(
        <div className="booking-container">
            <h1>Book A Table</h1>
            <form className="booking-form" onSubmit={handleSubmit}>

                <div className="booking-item">
                    <label htmlFor="res-date">Choose Date</label>
                    <input 
                    type="date" 
                    id="res-date" 
                    value={date}
                    onChange={handleDateChange}
                    />
                </div>

                <div className="booking-item">
                    <label htmlFor="res-time">Choose Time</label>
                    <select 
                        id="res-time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}>
                            {Array.isArray(availableTimes) ? availableTimes.map((availableTime, index) => (
                                <option key={index} value={availableTime}>{availableTime}</option>
                            )) : <option disabled>Error: Available times data is invalid!</option>}
                    </select>
                </div>
                <div className="booking-item">
                    <label htmlFor="guests">Number of guests</label>
                    <input 
                        type="number" 
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests" 
                        value={guest}
                        onChange={(e) => setGuest(e.target.value)}/>
                </div>
                <div className="booking-item">
                    <label htmlFor="occasion">Occasion</label>
                    <select 
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="booking-item">
                    <input 
                        type="submit" 
                        value="Make Your reservation" 
                    />
                </div>
            </form>
        </div>
    );

}

export default BookingForm;