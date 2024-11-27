import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";
import {fetchAPI} from "../data/api";

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload); // Use the date from the dispatched action
        default:
            return state;
    }
};


const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const Reservation = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes); 

    return(
        <div className="">
            <BookingForm 
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </div>
    );
}

export default Reservation;