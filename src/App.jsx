import React, { useState, useMemo } from "react";
import { Container, Grid, Paper, Box } from "@mui/material";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import SearchBar from "./components/SearchBar";
import TicketCounter from "./components/TicketCounter";
import { motion } from "framer-motion";
import NoTicket from "./assets/no-ticket.png"

function App() {
  const [tickets, setTickets] = useState([]);
  console.log('tickets:222 ', tickets);
  const [search, setSearch] = useState("")

  const handleAddTicket = (ticket) => {
    setTickets((prev) => [...prev, { ...ticket, id: Date.now(), status: "open" }]);
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((t) =>
      [t.title, t.description]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [tickets, search]);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513265472937-50d3e680377c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            // maxWidth: "1200px",
            minHeight: "80vh",
            display: "flex",
            bgcolor: "rgba(255,255,255,0.9)",
          }}
        >
          {/* Left Side - Form */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              borderRight: "2px solid #ddd",
              display: "flex",
              width: '100%',
              // alignItems: "center",
            }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%" }}
            >
              <TicketForm onAddTicket={handleAddTicket} />
            </motion.div>
          </Box>

          {/* Right Side - Search + Tickets */}
          <Box sx={{ flex: 1, p: 3 }}>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >

              {/* <Paper sx={{ p: 2, mb: 2 }} elevation={1}> */}
              <SearchBar search={search} setSearch={setSearch} />
              {/* </Paper> */}
              {tickets && tickets.length > 0 ?
                <>
                  <TicketCounter tickets={tickets} />
                  <TicketList tickets={filteredTickets} />
                </>
                :
                <Box marginTop={3}>
                <img src={NoTicket} alt={" NO Ticket"} loading="lazy" width={"70%"} />
                </Box>
              }
            </motion.div>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default App
