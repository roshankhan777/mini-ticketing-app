import React, { useState } from "react";
import { TextField, Button, MenuItem, Stack } from "@mui/material";

function TicketForm({ onAddTicket }) {
  const [form, setForm] = useState({ title: "", description: "", priority: "Low" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Title is required!");
    onAddTicket(form);
    setForm({ title: "", description: "", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          multiline
          rows={3}
        />
        <TextField
          select
          label="Priority"
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </form>
  );
}

export default  TicketForm;
