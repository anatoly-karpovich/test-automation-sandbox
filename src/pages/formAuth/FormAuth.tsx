import { useState } from "react";
import { Box, TextField, Button, Typography, Alert, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormAuth() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login === "admin" && password === "qwerty") {
      navigate("/success");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Form Authentication
      </Typography>
      <Typography variant="h6" gutterBottom>
        For sucessfull login use following credentials:
      </Typography>
      <Typography variant="h6" gutterBottom>
        username:{" "}
        <Typography component="span" fontWeight="bold">
          admin
        </Typography>{" "}
        and password:{" "}
        <Typography component="span" fontWeight="bold">
          qwerty
        </Typography>{" "}
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          Login Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            data-testid="username-input"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }} data-testid="error-message">
              {error}
            </Alert>
          )}

          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 3 }} data-testid="login-button">
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
