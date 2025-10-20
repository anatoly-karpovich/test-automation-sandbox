import { Box, Typography, Grid, Paper, CardActionArea, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import TableChartIcon from "@mui/icons-material/TableChart";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import DownloadIcon from "@mui/icons-material/Download";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
// import ToggleOnIcon from "@mui/icons-material/ToggleOn";

export default function Home() {
  const modules = [
    {
      title: "Forms",
      color: "#1976d2",
      items: [
        {
          name: "Form Authentication",
          path: "/form-auth",
          icon: <LoginIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
        },
      ],
    },
    {
      title: "Elements",
      color: "#2e7d32",
      items: [
        // { name: "Checkboxes", path: "/checkboxes", icon: <CheckBoxIcon sx={{ fontSize: 40, color: "#388e3c" }} /> },
        // {
        //   name: "Dynamic Content",
        //   path: "/dynamic-content",
        //   icon: <DynamicFeedIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
        // },
        // {
        //   name: "Dynamic Controls",
        //   path: "/dynamic-controls",
        //   icon: <ToggleOnIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
        // },
        {
          name: "Dropdown",
          path: "/dropdown",
          icon: <ArrowDropDownCircleIcon sx={{ fontSize: 40, color: "#8e24aa" }} />,
        },
        {
          name: "Dynamic Loading",
          path: "/dynamic-loading",
          icon: <HourglassBottomIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
        },
        { name: "Secret Area", path: "/secret-area", icon: <LockIcon sx={{ fontSize: 40, color: "#7b1fa2" }} /> },
        {
          name: "Sortable Table",
          path: "/sortable-table",
          icon: <TableChartIcon sx={{ fontSize: 40, color: "#1565c0" }} />,
        },
      ],
    },
    {
      title: "Files & Frames",
      color: "#6a1b9a",
      items: [
        { name: "Frames", path: "/iframe", icon: <ViewCarouselIcon sx={{ fontSize: 40, color: "#8e24aa" }} /> },
        {
          name: "File Download",
          path: "/file-download",
          icon: <DownloadIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 128px)",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
        Automation Sandbox
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 5, color: "text.secondary" }}>
        Набор демо-страниц для самых маленьких
      </Typography>

      {modules.map((module, idx) => (
        <Box key={module.title} sx={{ width: "100%", maxWidth: 1000, mb: 6 }}>
          {idx !== 0 && <Divider sx={{ mb: 4 }} />}
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: module.color,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {module.title}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {module.items.map(({ name, path, icon }) => (
              // @ts-ignore
              <Grid key={path} item xs={12} sm={6} md={4} lg={3}>
                <CardActionArea
                  component={RouterLink}
                  to={path}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 150,
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid #e0e0e0",
                    transition: "all 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {React.cloneElement(icon, { sx: { fontSize: 40 } })}
                  </Box>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      mt: 1,
                      px: 1,
                      wordWrap: "break-word",
                      fontWeight: 500,
                    }}
                  >
                    {name}
                  </Typography>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
