import { Box, Button, Typography, Paper } from "@mui/material";

export default function SecretArea() {
  const handleSecretClick = () => {
    alert("🚨 You've reached a secret area!");
  };

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
      <Typography variant="h5" mb={2}>
        Secret Area
      </Typography>
      <Typography variant="body1" mb={4}>
        There’s a hidden red button somewhere here... or maybe *under* here 👀
      </Typography>
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
        {/* Красная кнопка — ПОД другим элементом */}
        <Button
          variant="contained"
          color="error"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1, // ниже перекрывающего слоя
          }}
          onClick={handleSecretClick}
          data-testid="secret-button"
        >
          Secret Button
        </Button>

        {/* Перекрывающий элемент */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 2,
          }}
          data-testid="cover-layer"
        >
          <Typography
            variant="h6"
            color="white"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            🔒 Access Denied
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
