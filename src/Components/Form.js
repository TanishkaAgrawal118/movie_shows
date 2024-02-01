import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Alert, Button, Container, Dropdown } from "react-bootstrap";
import showImages from "../Images/tickets.webp";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const { showKey, showName } = location.state || {};


  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = () => {

    const formData = {
      showKey,
      showName,
      phoneNumber,
      selectedTime,
      numberOfTickets,
    };

    localStorage.setItem("bookingData", JSON.stringify(formData));

    setPhoneNumber("");
    setSelectedTime("");
    setNumberOfTickets("");
    setBookingSuccess(true);

    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);

  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        padding: "200px",
        height: "100%",
        backgroundImage: `url(${showImages})`,
        backgroundSize: "cover",
      }}
    >
      <Paper elevation={2} className="p-3 w-50">
        <form>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "serif",
              marginBottom: "10px",
            }}
          >
            Book Your Show Now
          </h2>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "fantasy",
              marginBottom: "20px",
            }}
          >
            Movie Name: {showName}
          </h3>

          <div className="mb-2">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              className="form-control"
            />
          </div>
          <Dropdown style={{ marginTop: "10px" }}>
            <label>Show Time : </label>
            <Dropdown.Toggle
              className="btn-sm"
              variant="success"
              id="dropdown-basic"
              style={{ marginLeft: "10px" }}
            >
              Select Time
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                value="Option 1"
                onClick={() => setSelectedTime("9:00 AM")}
              >
                9:00 AM
              </Dropdown.Item>
              <Dropdown.Item
                value="Option 2"
                onClick={() => setSelectedTime("1:00 PM")}
              >
                1:00 PM
              </Dropdown.Item>
              <Dropdown.Item
                value="Option 3"
                onClick={() => setSelectedTime("5:00 PM")}
              >
                5:00 PM
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="mb-2">
            <label>Number of tickets</label>
            <input
              type="text"
              name="numberOfTickets"
              value={numberOfTickets}
              onChange={(e) => setNumberOfTickets(e.target.value)}
              placeholder="Enter number of tickets"
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button
              className="btn btn-success"
              onClick={handleBooking}
              type="button"
              style={{marginBottom:'20px'}}
            >
              Book Now
            </Button>
          </div>
          {bookingSuccess && (
            <Alert variant="success">
              Ticket booked successfully! Thank you for your reservation.
            </Alert>
          )}
        </form>
      </Paper>
    </div>
  );
};

export default Form;
