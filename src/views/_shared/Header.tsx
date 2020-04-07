import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MeunuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link, withRouter } from "react-router-dom";
import logo from "../../images/cover.png";

//import { ThemeContext } from "../../context/contexts";

//This component makes the navagation bar flat when at the very top
//of the page but hovers the navagation bar when scrolling down.
function ElevationScroll(props: any) {
   const { children } = props;
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
   });

   return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
   });
}

//styling
const useStyles = makeStyles(theme => ({
   //This will give the navigation bar some extra padding bellow it.
   toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "2em",
      [theme.breakpoints.down("md")]: {
         marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
         marginBottom: "1.5em",
      },
   },
   appBar: {
      zIndex: theme.zIndex.modal + 1,
   },
   logoContainer: {
      "padding": 0,
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   //This will set a height for the logo
   logo: {
      height: "7em",
      [theme.breakpoints.down("md")]: {
         height: "7em",
      },
      [theme.breakpoints.down("xs")]: {
         height: "5.5",
      },
   },
   tabContainer: {
      marginLeft: "auto",
      padding: 0,
   },
   tab: {
      ...theme.typography.tab,
      minWidth: "10",
      marginLeft: "25px",
   },
   drawerIconContainer: {
      "marginLeft": "auto",
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   drawerIcon: {
      height: "50px",
      width: "50px",
      color: theme.palette.secondary.main,
   },
   drawer: {
      backgroundColor: theme.palette.primary.main,
   },
   drawerItem: {
      ...theme.typography.tab,
      minWidth: "10",
      marginLeft: "15px",
      color: theme.palette.secondary.main,
      opacity: 0.5,
   },
   drawerItemSelected: {
      "& .MuiListItemText-root": {
         opacity: 1,
      },
   },
}));

const Header = (props: any) => {
   //material ui hooks
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));

   // this gives us a bolean value that checks if the device is iOS to make drawer to be swipeable
   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

   const [value, setValue] = useState(0);
   const [openDrawer, setOpenDrawer] = useState(false);
   //useContext Proof of concept
   // const [darkMode, setDarkMode] = useState(false);
   // const globalTheme = {
   //    darkMode,
   //    // can even pass the setter function so children can
   //    // trigger changes
   //    setDarkMode,
   // };

   const handleChange = (e: any, value: number) => {
      setValue(value);
   };

   useEffect(() => {
      if (props.location.pathname === "/" && value !== 0) {
         setValue(0);
      } else if (props.location.pathname === "/login" && value !== 1) {
         setValue(1);
      } else if (props.location.pathname === "/register" && value !== 2) {
         setValue(2);
      }
   }, [value, props.location.pathname]);

   const tabs = (
      <>
         <Tabs
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
         >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
               className={classes.tab}
               component={Link}
               to="/login"
               label="Login"
            />
            <Tab
               className={classes.tab}
               component={Link}
               to="/register"
               label="Register"
            />
         </Tabs>
      </>
   );

   const drawer = (
      <>
         <SwipeableDrawer
            classes={{ paper: classes.drawer }}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
         >
            <div className={classes.toolbarMargin} />

            <List>
               <ListItem
                  classes={{ selected: classes.drawerItemSelected }}
                  divider
                  button
                  component={Link}
                  to="/"
                  selected={value === 0}
                  onClick={() => {
                     setOpenDrawer(false);
                     setValue(0);
                  }}
               >
                  <ListItemText className={classes.drawerItem}>
                     Home
                  </ListItemText>
               </ListItem>
               <ListItem
                  classes={{ selected: classes.drawerItemSelected }}
                  divider
                  button
                  component={Link}
                  to="/login"
                  selected={value === 1}
                  onClick={() => {
                     setOpenDrawer(false);
                     setValue(1);
                  }}
               >
                  <ListItemText className={classes.drawerItem}>
                     Login
                  </ListItemText>
               </ListItem>
               <ListItem
                  classes={{ selected: classes.drawerItemSelected }}
                  divider
                  button
                  component={Link}
                  to="/register"
                  selected={value === 2}
                  onClick={() => {
                     setOpenDrawer(false);
                     setValue(2);
                  }}
               >
                  <ListItemText className={classes.drawerItem}>
                     Register
                  </ListItemText>
               </ListItem>
            </List>
         </SwipeableDrawer>
         <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
         >
            <MeunuIcon className={classes.drawerIcon} />
         </IconButton>
      </>
   );
   return (
      <>
         <ElevationScroll>
            <AppBar className={classes.appBar} position="fixed">
               <Toolbar disableGutters>
                  <Button
                     className={classes.logoContainer}
                     component={Link}
                     to="/"
                     onClick={() => setValue(0)}
                     disableRipple
                  >
                     <img
                        className={classes.logo}
                        src={logo}
                        alt="company logo"
                     />
                  </Button>
                  {matches ? drawer : tabs}
               </Toolbar>
            </AppBar>
         </ElevationScroll>
         <div className={classes.toolbarMargin} />
      </>
   );
};

//the withRouter higher order component gives the Header compononet access to react-router props
export default withRouter(Header);
