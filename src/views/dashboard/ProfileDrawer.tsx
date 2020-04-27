import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 160;

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: "flex",
      },
      drawer: {
         [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
         },
      },
      drawerPaper: {
         width: drawerWidth,
      },
      drawerContainer: {
         overflow: "none",
      },
      content: {
         flexGrow: 1,
         padding: theme.spacing(2),
      },
   })
);

export default function ProfileDrawer() {
   const classes = useStyles();
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   return (
      <div className={classes.root}>
         <CssBaseline />
         <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
               paper: classes.drawerPaper,
            }}
            anchor="right"
         >
            <Toolbar />
            <div className={classes.drawerContainer}>
               <List>
                  {["My Profile", "My Projects", "Dashboard"].map(
                     (text, index) => (
                        <ListItem button key={text}>
                           <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                           </ListItemIcon>
                           <ListItemText primary={text} />
                        </ListItem>
                     )
                  )}
               </List>
            </div>
         </Drawer>
      </div>
   );
}
