import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
} from "@mui/material";
import React from "react";

// Custom styling for the sidebar container with a dark background and padding
const SidebarContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  display: { xs: "none", sm: "block" },
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f4f4f4",
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  height: "100vh", // Full height sidebar
  borderRadius: "0 20px 20px 0",
  boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
  position: "relative",
  overflowY: "auto", // Ensure scrolling within the sidebar
}));

// Custom styling for the ListItemButton with hover effects
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "8px",
  marginBottom: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#444" : "#e0e0e0",
    transform: "scale(1.02)",
  },
}));

const Sidebar = ({ mode, setMode }) => {
  return (
    <SidebarContainer>
      <List>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#home">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#90caf9" : "#1976d2" }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#pages">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#ffcc80" : "#fb8c00" }}
            >
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#groups">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#a5d6a7" : "#388e3c" }}
            >
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#marketplace">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#ffab91" : "#d84315" }}
            >
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#friends">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#ce93d8" : "#8e24aa" }}
            >
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#settings">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#ffe082" : "#fbc02d" }}
            >
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#profile">
            <ListItemIcon
              sx={{ color: mode === "dark" ? "#b39ddb" : "#5e35b1" }}
            >
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <StyledListItemButton component="a" href="#dark-mode">
            <ListItemIcon>
              <ModeNight
                sx={{ color: mode === "dark" ? "#81d4fa" : "#0288d1" }}
              />
            </ListItemIcon>
            <Switch
              checked={mode === "dark"}
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </StyledListItemButton>
        </ListItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
