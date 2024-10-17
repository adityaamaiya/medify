import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import medicalcenter from "../../assets/medicalCenter.svg";
import free from "../../assets/free.svg";
import thumbsup from "../../assets/thumbsup.svg";
import Btn from "../Button/Button";
import { Button } from "@mui/material";
import BasicModal from "./Modal";

export default function CenterCard({
  name,
  address,
  type,
  appoinmenttime,
  day,
  booking,
}) {
  const [value, setValue] = React.useState("one");
  const [show, setShow] = React.useState(false);

  const [time, setTime] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBtnClick = () => {
    setShow(!show);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "16px",
        marginBottom: "10px",
        marginTop: "10px",
        width: "786px",
        height: "max-content",
        marginLeft: "100px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "max-content",
          margin: "0",
          borderRadius: "16px",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-start", height: "100%" }}
        >
          <img
            src={medicalcenter}
            alt="Medical Center"
            style={{ width: "140px", height: "140px", marginBottom: "20px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "339px",
            height: "100%",
            marginLeft: "10px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              marginBottom: "10px",
              width: "100%",
              color: "#2AA7FF",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2px", fontWeight: "bold" }}
          >
            {address}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            {type}
          </Typography>
          <img
            src={free}
            alt="free"
            style={{ width: "307px", height: "21px", marginBottom: "20px" }}
          />
          <img
            src={thumbsup}
            alt="thumbsup"
            style={{ width: "307px", height: "39px", marginBottom: "20px" }}
          />
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          {booking ? (
            <>
              <Button variant="outlined" sx={{margin:"10px"}}>{appoinmenttime}</Button>
              <Button variant="outlined" sx={{color:"green", borderColor:"green"}}>{day}</Button>
            </>
          ) : (
            <>
              <Typography
                variant="body1"
                sx={{ marginBottom: "20px", color: "rgba(1, 164, 0, 1)" }}
              >
                Available Today
              </Typography>
              <Btn style={{ width: "212px" }} onClick={() => handleBtnClick()}>
                Book FREE Center Visit
              </Btn>
            </>
          )}
        </Box>
      </Box>
      {show && ( // Render when hidden is false
        <>
          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .Mui-selected": {
                  color: "#2AA7FF", // Text color for active tab
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#2AA7FF", // Indicator color
                },
              }}
            >
              <Tab value="one" label="Today" />
              <Tab value="two" label="Tomorrow" />
              <Tab value="three" label="Day after Tomorrow" />
            </Tabs>
          </Box>
          <Box
            sx={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Typography>Morning</Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("8:00 AM");
              }}
            >
              8:00 AM
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("9:00 AM");
              }}
            >
              9:00 AM
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("10:00 AM");
              }}
            >
              10:00 AM
            </Button>
          </Box>
          <Box
            sx={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              borderTop: "1px solid #2AA7FF",
              borderBottom: "1px solid #2AA7FF",
              padding: "10px",
            }}
          >
            <Typography>Afternoon</Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("11:00 AM");
              }}
            >
              12:00 PM
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("1:00 PM");
              }}
            >
              1:00 PM
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("2:00 PM");
              }}
            >
              2:00 PM
            </Button>
          </Box>
          <Box
            sx={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Typography>Evening</Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("5:00 PM");
              }}
            >
              5:00 PM
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("6:00 PM");
              }}
            >
              6:00 PM
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenModal(true);
                setTime("7:00 PM");
              }}
            >
              7:00 PM
            </Button>
          </Box>
        </>
      )}
      <BasicModal
        on={openModal}
        time={time}
        day={value}
        name={name}
        address={address}
        type={type}
      />
    </Box>
  );
}
