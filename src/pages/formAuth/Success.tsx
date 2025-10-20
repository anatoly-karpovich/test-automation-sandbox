import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" mb={2} color="success.main">
          ✅ Login Successful!
        </Typography>
        <Typography variant="body1" mb={3}>
          You have successfully logged in to Automation Sandbox.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/form-auth")}>
          Back to Login
        </Button>
      </Paper>
    </Box>
  );
}
