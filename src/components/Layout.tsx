import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar position="fixed" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 500, letterSpacing: 0.5 }}>
            Automation Sandbox
          </Typography>
          <Button color="inherit" component={RouterLink} to="/" sx={{ fontWeight: 600 }}>
            Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основной контент */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
          px: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>

      {/* Футер */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 2,
          fontSize: 14,
          color: "text.secondary",
          borderTop: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        © {new Date().getFullYear()} Automation Sandbox by Anatoly Karpovich
      </Box>
    </Box>
  );
}
