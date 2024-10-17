import React, { useState, useEffect } from "react";
import Btn from "../Button/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

export default function BasicModal({
  time,
  name,
  address,
  type,
  on = false,
  day,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(on);

  const handleDay = (day) => {
    if (day === "one") {
      return "Today";
    } else if (day === "two") {
      return "Tomorrow";
    } else {
      return "Day after Tomorrow";
    }
  };

  // Ensure the modal opens/closes when the `on` prop changes
  useEffect(() => {
    setOpen(on);
  }, [on]);

  const bookingsArray = JSON.parse(localStorage.getItem("bookings")) || [];

  const handleClose = () => {
    const data = {
      name,
      address,
      type,
      time,
      day,
    };

    bookingsArray.push(data);
    localStorage.setItem("bookings", JSON.stringify(bookingsArray));
    setOpen(false);
    navigate("/bookings");
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ backgroundColor: "white", padding: "20px" }}>
          <h4>Hospital: {name}</h4>
          <p>Address: {address}</p>
          <p>Type: {type}</p>
          <p>Time: {time}</p>
          <p>Day: {handleDay()}</p>
          <Btn onClick={handleClose} style={{ width: "212px" }}>
            Confirm and Close
          </Btn>
        </div>
      </Modal>
    </div>
  );
}
