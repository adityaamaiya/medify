import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard";
import heartrateIcon from "../../assets/heart-rate.svg";
import bloodIcon from "../../assets/blood-sample.svg";
import heartMonitorIcon from "../../assets/heart-monitor.svg";
import labsIcon from "../../assets/labs.svg";
import immuneIcon from "../../assets/immune.svg";
import stethoscopeIcon from "../../assets/stethoscope.svg";
import xrayIcon from "../../assets/xray.svg";

export default function Specialization() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "50px",
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Typography
        variant="h3"
        color="rgba(27, 60, 116, 1)"
        align="center"
        fontWeight={600}
        fontSize={"48px"}
        lineHeight={"67px"}
        marginBottom={"50px"}
      >
        Find By Specialization
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        width={"60%"}
      >
        <Grid item lg={3}>
          <ServiceCard icon={labsIcon} Title="Dentistry" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={stethoscopeIcon} Title="Primary Care" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={heartrateIcon} Title="Cardiology" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={heartMonitorIcon} Title="MRI Resonance" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={bloodIcon} Title="Blood Test" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={immuneIcon} Title="Psycologist" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={labsIcon} Title="Laboratory" />
        </Grid>
        <Grid item lg={3}>
          <ServiceCard icon={xrayIcon} Title="X-Ray" />
        </Grid>
      </Grid>
    </Box>
  );
}
