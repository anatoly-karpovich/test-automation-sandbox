import { Box, Typography, Paper } from "@mui/material";

export default function Iframe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        marginTop: "40px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "80%",
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          IFrame Example
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Enter text inside the frame below and submit it.
        </Typography>

        <iframe
          title="example-iframe"
          srcDoc={`
            <html>
              <head>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    background: #fafafa;
                  }
                  input, button {
                    margin: 8px;
                    padding: 8px;
                    font-size: 16px;
                  }
                  button {
                    cursor: pointer;
                  }
                </style>
              </head>
              <body>
                <h3>Inner Frame Form</h3>
                <input id="textInput" type="text" placeholder="Type something..." />
                <button id="submitBtn">Submit</button>
                <p id="result"></p>
                <script>
                  document.getElementById('submitBtn').addEventListener('click', () => {
                    const value = document.getElementById('textInput').value;
                    const result = document.getElementById('result');
                    if (value.trim()) {
                      result.textContent = 'You entered: ' + value;
                    } else {
                      result.textContent = 'Please enter some text first.';
                    }
                  });
                </script>
              </body>
            </html>
          `}
          style={{
            width: "100%",
            height: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
      </Paper>
    </Box>
  );
}
