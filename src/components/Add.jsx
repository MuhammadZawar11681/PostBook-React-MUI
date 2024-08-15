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
  IconButton
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  Close as CloseIcon
} from "@mui/icons-material";
import { Box } from "@mui/system";

// Styled components
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled(Box)({
  width: 400,
  height: 350,
  backgroundColor: "#fff",
  color: "#000",
  padding: 3,
  borderRadius: 8,
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const IconButtonStyled = styled(IconButton)({
  position: "absolute",
  top: 10,
  right: 10,
});

const Add = () => {
  const [open, setOpen] = useState(false);

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
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <IconButtonStyled onClick={() => setOpen(false)} color="inherit">
            <CloseIcon />
          </IconButtonStyled>
          <Typography variant="h6" color="text.primary" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 40, height: 40 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="outlined"
            fullWidth
          />
          <Stack direction="row" gap={1} mt={2} mb={3} justifyContent="space-between">
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </ModalContent>
      </StyledModal>
    </>
  );
};

export default Add;
