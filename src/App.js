import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import {
  Box,
  createTheme,
  Stack,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === "light" ? "#f0f2f5" : "#18191a",
      },
      text: {
        primary: mode === "light" ? "#1c1e21" : "#e4e6eb",
      },
      primary: {
        main: "#1877f2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        minHeight="100vh"
      >
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          padding={2}
        >
          <Box
            sx={{
              width: 240,
              height: `calc(100vh - 64px)`,
              overflowY: "scroll",
              position: "sticky",
              top: 64,
              flexShrink: 0,
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Sidebar setMode={setMode} mode={mode} />
          </Box>
          <Box
            flex={1}
            sx={{
              height: `calc(100vh - 64px)`,
              overflowY: "scroll",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Feed />
          </Box>
          <Box
            sx={{
              width: 300,
              height: `calc(100vh - 64px)`,
              overflowY: "scroll",
              flexShrink: 0,
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Rightbar />
          </Box>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}


export default App;
