import { Mail, Notifications, Pets } from "@mui/icons-material";
import myAvatar from "../images/IMG_08111.jpg";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// Custom styling for the Toolbar with a gradient background
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "linear-gradient(to right, #6a11cb, #2575fc)", // Changed to a gradient background
  padding: "0 20px", // Added padding
});

// Custom styling for the Search bar with a subtle shadow
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#f1f3f4", // Changed background color to a light gray
  padding: "0 15px", // Increased padding
  borderRadius: "30px", // Changed to fully rounded corners
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Added shadow for depth
  width: "50%", // Increased width
  transition: "width 0.3s ease", // Added smooth transition for width
  "&:hover": {
    width: "55%", // Expand on hover
  },
}));

// Custom styling for the Icons section with a larger gap and a different color scheme
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "25px", // Increased gap between icons
  color: "#ffffff", // Changed icon color to white
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// Custom styling for the UserBox with a larger gap and different colors
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px", // Increased gap
  color: "#ffffff", // Changed text color to white
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} sx={{ background: "transparent" }}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }} // Bolded text
        >
          PostBook
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" }, color: "#ffffff" }} />{" "}
        {/* Changed icon color */}
        <Search>
          <InputBase placeholder="Search..." sx={{ color: "#333" }} />{" "}
          {/* Changed placeholder color */}
        </Search>
        <Icons>
          <Badge badgeContent={7} color="secondary">
            {" "}
            {/* Changed badge color */}
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="secondary">
            {" "}
            {/* Changed badge color */}
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 36, height: 36, border: "2px solid #ffffff" }} // Added border to avatar
            src={myAvatar}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 36, height: 36, border: "2px solid #ffffff" }} // Added border to avatar
            src={myAvatar}
          />
          <Typography variant="span" sx={{ fontWeight: "500" }}>
            Zawar
          </Typography>{" "}
          {/* Adjusted font weight */}
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
