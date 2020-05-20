import React, { useState } from "react";
import { Button, makeStyles, Grid, Typography } from "@material-ui/core/";
import Loader from "../_shared/Loader";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { INITIATE_RESET } from "../../graphql-requests/mutations";
import { InitiateResetData } from "../../types/FormTypes";
import { setToken } from "../util/useLocalStorage";

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
   initiateResetContainer: {
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

export const InitiateReset: React.FC<InitiateResetData> = (
   props: InitiateResetData
) => {
   const classes = useStyles();
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
   }
   const [reset] = useMutation(INITIATE_RESET);
   const onSubmit = ({ email }: InitiateResetData) => {
      submitForm();
      reset({
         variables: { email },
      })
         .then(res => {
            setToken(res.data.initiateReset.token);
            alert(res.data.initiateReset.message);
            props.history.push("/login");
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
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
            className={classes.initiateResetContainer}
            alignItems="center"
            justify="center"
         >
            <Grid item>
               <Typography variant="h1" component="h2" align="center">
                  Password Reset
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="body1" component="p">
                  Forgot your password? Enter your email address below and and a
                  link to reset your password will be sent to your email.
               </Typography>
            </Grid>
            <Grid item>
               <Form
                  className={`reset-form ${classes.formContainer}`}
                  data-testid="reset-form"
                  onSubmit={onSubmit}
               >
                  <Input
                     name="email"
                     placeholder="Email"
                     type="email"
                     fullWidth
                     className={classes.textField}
                     required
                     label="Email"
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
                              Reset Password
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
