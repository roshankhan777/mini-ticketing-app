import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function TicketItem({ ticket }) {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "#fdfdfd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: 2,
        width: "100%",
        maxWidth: { xs: "100%", sm: 400, md: '100%' },
        m: "auto",
      }}
    >
      <CardContent>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={1}
          justifyContent="space-between"
          alignItems={isMobile ? "flex-start" : "center"}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              wordBreak: "break-word",
              flexGrow: 1,
            }}
          >
            {ticket?.title}
          </Typography>
          <Chip
            label={ticket?.priority}
            color={getPriorityColor(ticket?.priority)}
            size="small"
            sx={{ mt: isMobile ? 1 : 0 }}
          />
        </Stack>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#555",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            wordBreak: "break-word",
          }}
        >
          {ticket.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TicketItem;