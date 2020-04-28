import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link, withRouter } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { getToken } from "../../util/TokenHelpers";
import ElevationScroll from "../ElevationScroll";
import HeaderAvatar from "./HeaderAvatar";
import HeaderTabs from "./HeaderTabs";
import HeaderDrawer from "./HeaderDrawer";
import { useRoutes } from "../../util/routes";
import DynamicScrollToTop from "../DynamicScrollToTop";
//import { ThemeContext } from "../../context/contexts";

//styling
const useStyles = makeStyles(theme => ({
   //This will give the navigation bar some extra padding bellow it.
   toolbarMargin: {
      ...theme.mixins.toolbar,
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
      height: "4em",
      [theme.breakpoints.down("md")]: {
         height: "4em",
      },
      [theme.breakpoints.down("xs")]: {
         height: "3.5",
      },
   },
}));

const Header = (props: any) => {
   const [value, setValue] = useState(0);
   //material ui hooks
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));
   // custom hooks
   const routes = useRoutes();
   const token = getToken();

   useEffect(() => {
      routes.forEach(route => {
         switch (props.location.pathname) {
            case `${route.link}`:
               if (value !== route.activeIndex) {
                  setValue(route.activeIndex);
               }
               break;
            default:
               break;
         }
      });
   }, [routes, value, props.location.pathname]);

   return (
      <>
         <DynamicScrollToTop />
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
                        data-testid="header-logo"
                     />
                  </Button>
                  {matches ? (
                     <HeaderDrawer value={value} routes={routes} />
                  ) : (
                     <HeaderTabs value={value} routes={routes} />
                  )}
                  {token ? <HeaderAvatar /> : null}
               </Toolbar>
            </AppBar>
         </ElevationScroll>
         <div className={classes.toolbarMargin} />
      </>
   );
};

//the withRouter higher order component gives the Header compononet access to react-router props
export default withRouter(Header);
