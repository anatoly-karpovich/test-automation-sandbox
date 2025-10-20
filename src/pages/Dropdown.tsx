import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Paper,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button,
  Chip,
} from "@mui/material";
import { useState } from "react";

export default function Dropdown() {
  // обычный select
  const [option, setOption] = useState("");
  // мультиселект
  const [multi, setMulti] = useState<string[]>([]);
  // кастомный dropdown
  const [customOpen, setCustomOpen] = useState(false);
  const [customSelected, setCustomSelected] = useState<string | null>(null);

  const customOptions = ["Red", "Green", "Blue", "Yellow", "Purple"];
  const fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"];
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedFruits(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        py: 6,
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        Dropdown Examples
      </Typography>

      {/* ======= Обычный SELECT ======= */}
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h6" mb={2}>
          Basic Select (Native HTML)
        </Typography>

        <Box sx={{ textAlign: "left" }}>
          <label htmlFor="basic-select" style={{ display: "block", marginBottom: 8 }}>
            Choose an option:
          </label>

          <select
            id="basic-select"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            data-testid="basic-select"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <option value="">Select option</option>
            <option value="option1" selected={option === "option1"}>
              Option 1
            </option>
            <option value="option2" selected={option === "option2"}>
              Option 2
            </option>
            <option value="option3" selected={option === "option3"}>
              Option 3
            </option>
          </select>
        </Box>

        {option && (
          <Typography sx={{ mt: 2 }} color="success.main">
            Selected: {option}
          </Typography>
        )}
      </Paper>

      {/* ======= Мультиселект ======= */}
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h6" mb={2}>
          Multiple Select with Chips
        </Typography>

        <FormControl fullWidth>
          <InputLabel id="chip-select-label">Select fruits</InputLabel>
          <Select
            labelId="chip-select-label"
            id="chip-select"
            multiple
            value={selectedFruits}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Select fruits" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            data-testid="multi-chip-select"
          >
            {fruits.map((fruit) => (
              <MenuItem key={fruit} value={fruit} data-testid={`chip-${fruit}`}>
                {fruit}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedFruits.length > 0 && (
          <Typography sx={{ mt: 2 }} color="success.main">
            Selected: {selectedFruits.join(", ")}
          </Typography>
        )}
      </Paper>

      {/* ======= Кастомный dropdown ======= */}
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h6" mb={2}>
          Custom Dropdown (UL / DIV)
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            userSelect: "none",
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setCustomOpen((prev) => !prev)}
            data-testid="custom-toggle"
          >
            {customSelected || "Select color"}
          </Button>

          {customOpen && (
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                mt: 1,
                border: "1px solid #ccc",
                borderRadius: 2,
                position: "absolute",
                width: "100%",
                backgroundColor: "background.paper",
                zIndex: 10,
              }}
              data-testid="custom-list"
            >
              {customOptions.map((color) => (
                <Box
                  component="li"
                  key={color}
                  onClick={() => {
                    setCustomSelected(color);
                    setCustomOpen(false);
                  }}
                  sx={{
                    p: 1.5,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "action.hover" },
                  }}
                  data-testid={`custom-item-${color}`}
                >
                  {color}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {customSelected && (
          <Typography sx={{ mt: 2 }} color="success.main">
            Selected: {customSelected}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
