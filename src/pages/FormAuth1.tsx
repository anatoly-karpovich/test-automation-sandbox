import { useState } from "react";
import { Box, Button, TextField, Alert, Typography, Paper } from "@mui/material";

export default function FormAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") setStatus("ok");
    else setStatus("err");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Form Authentication
      </Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={onSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </form>
        {status === "ok" && (
          <Alert severity="success" sx={{ mt: 2 }}>
            You logged into a secure area!
          </Alert>
        )}
        {status === "err" && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Your username is invalid!
          </Alert>
        )}
      </Paper>
    </Box>
  );
}
