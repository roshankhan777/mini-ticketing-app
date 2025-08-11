import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ search, setSearch }) {
  return (
    <TextField
      fullWidth
      label="Search tickets..."
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;