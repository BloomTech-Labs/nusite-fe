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
import Coderbackend from "../../images/devbackend2.jpg";

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
               <Avatar aria-label="Jordan" className={classes.avatar}>
                  J
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVertIcon />
               </IconButton>
            }
            title="Builder of servers/apis"
            subheader="April, 2020"
         />
         <CardMedia
            className={classes.media}
            image={Coderbackend}
            title="Jordan"
         />
         <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
               Hi I'm Jordan and I'm a seasoned backend developer. I've help
               dozens of businesses build APi's and servers. I work full stack
               too so I can help your front end/designers. Lets connect!
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
                  I'm Jordan, and I build servers.
                  <br />
                  Hit me up if you need a backend developer. I love to help!
                  <br />
               </Typography>
            </CardContent>
         </Collapse>
      </Card>
   );
}
