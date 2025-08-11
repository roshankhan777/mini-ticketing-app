import React from "react";
import { Typography } from "@mui/material";

function TicketCounter({ tickets = [] }) {
  const openCount = tickets.filter(ticket => ticket.status !== "closed").length;
  return (
    <Typography variant="subtitle1" sx={{ mt: 1 }}>
      You have {openCount} open tickets
    </Typography>
  );
}

export default TicketCounter;