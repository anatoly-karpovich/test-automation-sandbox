import { Grid } from "@mui/material";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import TableChartIcon from "@mui/icons-material/TableChart";
import WebIcon from "@mui/icons-material/Web";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const cards = [
  { label: "Form Authentication", path: "/form-auth", icon: <LoginIcon sx={{ fontSize: 48 }} color="primary" /> },
  { label: "Checkboxes", path: "/checkboxes", icon: <CheckBoxIcon sx={{ fontSize: 48 }} color="success" /> },
  { label: "Dropdown", path: "/dropdown", icon: <ArrowDropDownCircleIcon sx={{ fontSize: 48 }} color="secondary" /> },
  { label: "Dynamic Content", path: "/dynamic-content", icon: <DynamicFeedIcon sx={{ fontSize: 48 }} color="info" /> },
  {
    label: "Dynamic Controls",
    path: "/dynamic-controls",
    icon: <ToggleOnIcon sx={{ fontSize: 48 }} color="warning" />,
  },
  {
    label: "Dynamic Loading",
    path: "/dynamic-loading",
    icon: <HourglassBottomIcon sx={{ fontSize: 48 }} color="error" />,
  },
  { label: "Sortable Table", path: "/sortable-table", icon: <TableChartIcon sx={{ fontSize: 48 }} color="primary" /> },
  { label: "Frames", path: "/frames", icon: <WebIcon sx={{ fontSize: 48 }} color="secondary" /> },
  { label: "File Download", path: "/file-download", icon: <FileDownloadIcon sx={{ fontSize: 48 }} color="success" /> },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 600, textAlign: "center" }}>
        Automation Sandbox
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: "text.secondary", textAlign: "center" }}>
        Демо-сайт с различными элементами и формами для самых маленьких
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {cards.map(({ label, path, icon }) => (
          //@ts-ignore
          <Grid xs={12} sm={6} md={4} key={path}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
              }}
            >
              <CardActionArea
                onClick={() => navigate(path)}
                id={path.replace("/", "")}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  p: 3,
                }}
              >
                {icon}
                <CardContent sx={{ textAlign: "center", p: 0 }}>
                  <Typography variant="h6">{label}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
