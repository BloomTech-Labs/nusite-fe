import React from "react";
import { makeStyles, Avatar, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   button: {
      marginRight: "2%",
   },
   avatar: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.success.main,
   },
}));

const HeaderAvatar = () => {
   const username = localStorage.getItem("username");
   const classes = useStyles();

   return (
      <Button className={classes.button}>
         <Avatar className={classes.avatar}>{username?.charAt(0)}</Avatar>
      </Button>
   );
};

export default HeaderAvatar;
