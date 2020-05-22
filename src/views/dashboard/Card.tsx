import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import { blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Hero from "../../images/hero.jpeg";

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         maxWidth: 345,
      },
      media: {
         height: 0,
         paddingTop: "56.25%", // 16:9
      },
      expand: {
         transform: "rotate(0deg)",
         marginLeft: "auto",
         transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
         }),
      },
      expandOpen: {
         transform: "rotate(180deg)",
      },
      avatar: {
         backgroundColor: "#22C4D6",
      },
   })
);

export default function RecipeReviewCard() {
   const classes = useStyles();
   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };

   return (
      <Card className={classes.root}>
         <CardHeader
            avatar={
               <Avatar aria-label="project" className={classes.avatar}>
                  P
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVertIcon />
               </IconButton>
            }
            title="Partnerd Project"
            subheader="April, 2020"
         />
         <CardMedia className={classes.media} image={Hero} title="Partnerd" />
         <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
               We are web developers that work with a modern stack and design
               and create for all sorts of fun projects, specially matchmaking
               developers and clients with data science.
            </Typography>
         </CardContent>
         <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
               <FavoriteIcon />
            </IconButton>
            <IconButton
               className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
               })}
               onClick={handleExpandClick}
               aria-expanded={expanded}
               aria-label="show more"
            >
               <ExpandMoreIcon />
            </IconButton>
         </CardActions>
         <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
               <Typography paragraph>Projects: </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  The Partnerd project, match-making for web developers. Contact
                  us if you like what you see! https://www.partnerd.dev/
               </Typography>
            </CardContent>
         </Collapse>
      </Card>
   );
}
