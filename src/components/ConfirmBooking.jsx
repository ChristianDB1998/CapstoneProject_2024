import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./styles/ConfirmBooking.css";


const ConfirmBooking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingDetails = location.state?.bookingDetails;

    return(
        <div className="confirmBooking">
            <h1>Your reservation is confirmed!</h1>
            {bookingDetails && (
                <div className="confirmBooking-item">
                    <p>Date: {bookingDetails.date}</p>
                    <p>Time: {bookingDetails.selectedTime}</p>
                    <p>Guests: {bookingDetails.guest}</p>
                    <p>Occasion: {bookingDetails.occasion}</p>
                    <p>Please remember this information before leaving this page.</p>
                    <Button onClick={() => navigate("/")}>Continue</Button>
                </div>
            )}
        </div>
    );
}

export default ConfirmBooking;