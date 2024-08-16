import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import "./app.css";
import {
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [posts, setPosts] = useState([]);

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

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Navbar mode={mode} setMode={setMode} />
        <Box display="flex" flex={1} overflow="hidden">
          <Box display="flex" flexDirection="row" overflow="hidden" flex={1}>
            {!isMobile && (
              <Box
                sx={{
                  width: 240,
                  height: "calc(100vh - 64px)",
                  overflowY: "scroll",
                  position: "sticky",
                  top: 64,
                  flexShrink: 0,
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <Sidebar mode={mode} setMode={setMode} />
              </Box>
            )}
            <Box
              flex={3}
              sx={{
                height: "calc(100vh - 64px)",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Feed posts={posts} />
            </Box>
            {!isMobile && (
              <Box
                sx={{
                  width: 310,
                  height: "calc(100vh - 64px)",
                  overflowY: "scroll",
                  flexShrink: 0,
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#ccc",
                    borderRadius: "8px",
                  },
                }}
              >
                <Rightbar />
              </Box>
            )}
          </Box>
        </Box>
        <Add onAddPost={handleAddPost} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
