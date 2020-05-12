import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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
