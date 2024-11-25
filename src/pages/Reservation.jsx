import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, return the same times regardless of the action payload
            return ['10:00 AM', '11:00 AM', '12:00 PM'];
        default:
            return state;
    }
};

export const initializeTimes = () => {
    return ['10:00 AM', '11:00 AM', '12:00 PM'];
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