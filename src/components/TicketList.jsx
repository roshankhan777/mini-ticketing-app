import React from "react";
import { Stack, Typography } from "@mui/material";
import TicketItem from "./TicketItem";
import { motion, AnimatePresence } from "framer-motion";

function TicketList({ tickets }) {
  if (tickets.length === 0)
    return <Typography variant="body1">No tickets found.</Typography>;

  return (
    <Stack spacing={2}>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </Stack>
  );
}

export default TicketList;