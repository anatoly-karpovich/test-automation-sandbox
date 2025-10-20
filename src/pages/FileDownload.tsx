import { Box, Typography, Paper, List, ListItem, Link } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const files = [
  { name: "sample1.txt", path: "downloads/sample1.txt" },
  { name: "sample2.csv", path: "downloads/sample2.csv" },
  { name: "sample3.json", path: "downloads/sample3.json" },
];

export default function FileDownload() {
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
        }}
      >
        <Typography variant="h5" mb={3}>
          File Download
        </Typography>

        <Typography variant="body1" mb={2}>
          Click on a file to download:
        </Typography>

        <List>
          {files.map(({ name, path }) => (
            <ListItem key={name}>
              <Link
                href={path}
                download
                underline="hover"
                data-testid={`download-${name}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "1.1rem",
                }}
              >
                <DownloadIcon color="primary" />
                {name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
