import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
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

const Post = () => {
  return (
    <Card sx={{ margin: 5, borderRadius: 2, boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "teal" }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{ color: "grey.700" }}>
            <MoreVert />
          </IconButton>
        }
        title={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>John Doe</Typography>}
        subheader={<Typography variant="body2" color="text.secondary">September 14, 2024</Typography>}
      />
      <CardMedia
        component="img"
        height="240"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Dish"
        sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          This delicious paella is a fantastic party dish and a delightful meal to prepare with your guests. Feel free to add some frozen peas along with the mussels for extra flavor.
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
