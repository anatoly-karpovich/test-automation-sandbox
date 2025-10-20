import { useState } from "react";
import { Box, Button, LinearProgress, Typography, Paper, Checkbox } from "@mui/material";

export default function DynamicLoading() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setMessage("");
    setLoading(true);

    const duration = Math.floor(Math.random() * 6000) + 5000; // 8–15 сек

    const timeout = setTimeout(() => {
      setLoading(false);
      setVisible((prev) => !prev);
      setMessage(visible ? "The element has disappeared." : "The element has returned.");
      clearTimeout(timeout);
    }, duration);
  };

  const buttonText = loading ? "Loading..." : visible ? "Remove Element" : "Return Element";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography variant="h5" mb={3}>
          Dynamic Loading
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleToggle}
          disabled={loading}
          data-testid="start-button"
          sx={{ mb: 3, minWidth: 200 }}
        >
          {buttonText}
        </Button>

        {/* Прогресс бар */}
        {loading && (
          <Box sx={{ width: "100%", mb: 3 }} data-testid="progress-bar">
            <LinearProgress />
          </Box>
        )}

        {/* Динамический элемент */}
        {!loading && visible && (
          <Box sx={{ mb: 3 }} data-testid="dynamic-element">
            <Checkbox defaultChecked />
            <Typography variant="body1" display="inline">
              Dynamic checkbox
            </Typography>
          </Box>
        )}

        {/* Сообщение */}
        {!loading && message && (
          <Typography variant="body1" color={visible ? "error.main" : "success.main"} data-testid="status-message">
            {message}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
