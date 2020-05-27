import React from "react";
import { makeStyles, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
   tabContainer: {
      marginLeft: "auto",
      marginRight: "40px",
      padding: 0,
   },
   tab: {
      ...theme.typography.tab,
      minWidth: 75,
      width: 90,
      marginLeft: "40px",
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
