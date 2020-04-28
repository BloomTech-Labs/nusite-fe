import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//import { ProjectForm } from "./ProjectForm";

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         "& > *": {
            margin: theme.spacing(1),
         },
      },
      extendedIcon: {
         marginRight: theme.spacing(1),
      },
   })
);

export default function FloatingActionButtons() {
   const classes = useStyles();

   return (
      <>
         <p>Add Project</p>
         <div className={classes.root}>
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </div>
      </>
   );
}
