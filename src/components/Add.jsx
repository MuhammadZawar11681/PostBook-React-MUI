import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
  IconButton,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import myAvatar from "../images/IMG_08111.jpg";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Box } from "@mui/system";

// Styled components with enhanced visual design
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled(Box)(({ theme }) => ({
  width: 400,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  position: "relative",
  transition: "transform 0.3s ease, opacity 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    opacity: 0.98,
  },
}));

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "20px",
});

const IconButtonStyled = styled(IconButton)({
  position: "absolute",
  top: 10,
  right: 10,
  color: "#555",
});

const StyledFab = styled(Fab)(({ theme }) => ({
  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
  color: "#fff",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    background: "linear-gradient(135deg, #2575fc, #6a11cb)",
  },
}));

const Add = ({ onAddPost }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = () => {
    if (text.trim() || image) {
      onAddPost({ text, image });
      setText("");
      setImage(null);
      setOpen(false);
    }
  };

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Create Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
          zIndex: 10,
        }}
      >
        <StyledFab aria-label="add">
          <AddIcon />
        </StyledFab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <IconButtonStyled onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButtonStyled>
          <Typography
            variant="h6"
            color="text.primary"
            textAlign="center"
            sx={{ marginBottom: 2, fontWeight: "bold" }}
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 50, height: 50, border: "2px solid #1976d2" }}
              src={myAvatar}
            />
            <Typography fontWeight={500} variant="span">
              Muhammad Zawar
            </Typography>
          </UserBox>
          <TextField
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ddd",
              },
            }}
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            sx={{ marginTop: 2 }}
          />
          <Stack
            direction="row"
            gap={1}
            mt={2}
            mb={3}
            justifyContent="space-between"
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ borderRadius: "8px", overflow: "hidden" }}
          >
            <Button
              onClick={handlePost}
              sx={{
                background: "linear-gradient(135deg, #42a5f5, #1976d2)",
                "&:hover": { background: "#1976d2" },
              }}
            >
              Post
            </Button>
            <Button
              sx={{
                width: "100px",
                backgroundColor: "#f5f5f5",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#eee",
                },
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </ModalContent>
      </StyledModal>
    </>
  );
};

export default Add;
