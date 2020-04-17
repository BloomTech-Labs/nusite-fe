import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
   tabContainer: {
      marginLeft: "auto",
      padding: 0,
   },
   tab: {
      ...theme.typography.tab,
      minWidth: "10",
      marginLeft: "25px",
   },
}));

const HeaderTabs = (props: any) => {
   const classes = useStyles();
   const { value, routes } = props;

   return (
      <>
         <Tabs className={classes.tabContainer} value={value}>
            {routes.map((route: any) => (
               <Tab
                  key={`${route.activeIndex}`}
                  className={classes.tab}
                  component={Link}
                  to={route.link}
                  label={route.name}
               />
            ))}
         </Tabs>
      </>
   );
};

export default HeaderTabs;
