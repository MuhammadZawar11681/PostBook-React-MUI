import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import myAvatar from "../images/IMG_08111.jpg";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = ({ text, image }) => {
  return (
    <Card sx={{ margin: 5, borderRadius: 2, boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "teal" }} aria-label="recipe" src={myAvatar}>
            {/* This content inside the Avatar can be removed or kept as fallback */}
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{ color: "grey.700" }}>
            <MoreVert />
          </IconButton>
        }
        title={
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Muhammad Zawar
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            September 14, 2024
          </Typography>
        }
      />
      {image && (
  <CardMedia
    component="img"
    image={image}
    alt="Post Image"
    sx={{
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      objectFit: "cover", // Ensures the image covers the area
      width: "100%", // Makes sure the image takes up the full width
      height: "auto", // Adjusts height to maintain the aspect ratio
      maxHeight: 600, // Optional: you can set a max height to ensure very tall images don't take up too much space
    }}
  />
)}
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "pink" }} />}
          />
        </IconButton>
        <IconButton aria-label="share" sx={{ color: "grey.700" }}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
