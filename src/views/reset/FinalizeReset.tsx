import React, { useState } from "react";
import { Button, makeStyles, Grid, Typography } from "@material-ui/core/";
import Loader from "../_shared/Loader";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { FINALIZE_RESET } from "../../graphql-requests/mutations";
import { FinalizeResetData } from "../../types/FormTypes";

const useStyles = makeStyles(theme => ({
   container: {
      height: "1000px",
      backgroundImage: `url(${require("../../images/register.jpeg")})`,
      backgroundSize: "cover",
      [theme.breakpoints.down("md")]: {
         height: "700px",
         backgroundPosition: "top",
      },
   },
   finalizeResetContainer: {
      backgroundColor: theme.palette.common.white,
      width: "500px",
      border: "1px",
      color: theme.palette.primary.light,
      borderStyle: "solid",
      borderRadius: "25px",
      padding: "50px",
      [theme.breakpoints.down("md")]: {
         maxWidth: "100%",
      },
   },
   formContainer: {
      padding: "50px",
      [theme.breakpoints.down("md")]: {
         padding: "25px",
      },
   },
   textField: {
      marginBottom: "3em",
      [theme.breakpoints.down("md")]: {
         width: "100%",
      },
   },
}));

export const FinalizeReset: React.FC<FinalizeResetData> = ({
   email,
   password,
}: FinalizeResetData) => {
   const [state, setState] = useState({ loading: false });
   const classes = useStyles();
   function submitForm() {
      setState({ ...state, loading: true });
   }
   const [finalize] = useMutation(FINALIZE_RESET);
   const onSubmit = ({ email, password }: FinalizeResetData) => {
      submitForm();
      finalize({
         variables: { email, password },
      })
         .then(res => {
            console.log(res);
            alert("Password successfully changed. Please log in.");
         })
         .catch(err => {
            alert(err.message);
            console.log(err.message);
            setState({ ...state, loading: false });
         });
   };

   return (
      <Grid
         container
         direction="column"
         className={`main-container ${classes.container}`}
         alignItems="center"
      >
         <Grid
            container
            direction="column"
            className={classes.finalizeResetContainer}
            alignItems="center"
            justify="center"
         >
            <Grid item>
               <Typography variant="h1" component="h2" align="center">
                  Change Password
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="body1" component="p">
                  Choose a new password
               </Typography>
            </Grid>
            <Grid item>
               <Form
                  className={`finalize-reset-form ${classes.formContainer}`}
                  data-testid="finalize-reset-form"
                  onSubmit={onSubmit}
               >
                  <Input
                     name="email"
                     placeholder="Email"
                     label="Email"
                     type="email"
                     required
                     fullWidth
                     className={classes.textField}
                  />
                  <Input
                     name="password"
                     placeholder="Password"
                     label="Password"
                     type="password"
                     required
                     fullWidth
                     helperText="password must be at least 9 characters"
                     className={classes.textField}
                  />
                  <Grid container justify="center" alignItems="center">
                     {state.loading ? (
                        <Loader />
                     ) : (
                        <Button
                           variant="contained"
                           color="primary"
                           type="submit"
                        >
                           <Typography variant="body1" color="secondary">
                              Confirm Password
                           </Typography>
                        </Button>
                     )}
                  </Grid>
               </Form>
            </Grid>
         </Grid>
      </Grid>
   );
};
