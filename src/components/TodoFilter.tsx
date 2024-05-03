import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface TodoFilterProps {
  filterTodo: (filterType: string) => void;
}

export default function TodoFilter({ filterTodo }: TodoFilterProps) {
  const [filter, setFilter] = useState("all");
  const handleSelect = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
    filterTodo(e.target.value);
  };

  return (
    <Box sx={{ width: 130, marginLeft: "auto" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter"
          value={filter}
          onChange={handleSelect}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"complete"}>Complete</MenuItem>
          <MenuItem value={"incomplete"}>Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
