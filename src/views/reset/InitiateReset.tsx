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

      [theme.breakpoints.down("md")]: {},
   },
   formBorder: {
      padding: "50px",
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
         });
   };

   return (
      <Grid
         container
         direction="column"
         className={`main-container ${classes.container}`}
      >
         <Grid
            container
            direction="column"
            className={`form-border ${classes.formBorder}`}
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
                  Forgot your password? Enter your email below and and a link to
                  reset your password will be sent to your email.
               </Typography>
            </Grid>
            <Grid item>
               <Form
                  className={`reset-form form-container`}
                  data-testid="reset-form"
                  onSubmit={onSubmit}
               >
                  <Input
                     name="email"
                     placeholder="Email"
                     type="email"
                     fullWidth
                     className="text-field"
                  />
                  <Button
                     variant="contained"
                     color="primary"
                     type="submit"
                     onClick={submitForm}
                  >
                     {!state.loading && "Reset Password"}
                     {state.loading && <Loader />}
                  </Button>
               </Form>
            </Grid>
         </Grid>
      </Grid>
   );
};
