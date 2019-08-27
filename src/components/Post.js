import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function Post({
  post: { imageUrl, body, createdAt, username }
}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={`${username}'s Profile Image`} src={imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={body}
          // <React.Fragment>
          //   <Typography
          //     component="span"
          //     variant="body2"
          //     className={classes.inline}
          //     color="textPrimary">
          //     {username}
          //   </Typography>
          //   {body}
          // </React.Fragment>
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
