import React, { useContext } from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core/";
import Loader from "../_shared/Loader";
import { RegistrationFormData } from "../../types/FormTypes";
import {
   SIGNUP_START,
   SIGNUP_SUCCESS,
   AUTH_ERROR,
} from "../../context/user/actions";
import UserContext from "../../context/user/context";
import GoogleOAuth from "../_shared/GoogleOAuth";

const useStyles = makeStyles(theme => ({
   container: {
      height: "1000px",
      backgroundImage: `url(${require("../../images/register.jpeg")})`,
      backgroundSize: "cover",

      [theme.breakpoints.down("md")]: {
         backgroundPosition: "bottom",
      },
   },
   registerContainer: {
      backgroundColor: "white",
      width: "500px",
      border: "1px",
      color: theme.palette.primary.light,
      borderStyle: "solid",
      borderRadius: "25px",
      [theme.breakpoints.down("md")]: {
         maxWidth: "100%",
      },
   },
   formContainer: {
      padding: "50px",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justify: "center",
      alignContent: "center",
   },
   textField: {
      marginBottom: "3em",
      [theme.breakpoints.down("md")]: {
         width: "100%",
      },
   },
   oAuthButton: {
      marginBottom: "3em",
   },
}));

export const Registration: React.FC<RegistrationFormData> = (
   props: RegistrationFormData | any
) => {
   const { userData, userDispatch } = useContext(UserContext);
   const classes = useStyles();
   const [signup] = useMutation(SIGNUP);

   const onSubmit = ({
      first_name,
      last_name,
      username,
      password,
      email,
   }: RegistrationFormData) => {
      userDispatch({ type: SIGNUP_START, payload: null });

      signup({
         variables: { first_name, last_name, username, password, email },
      })
         .then(res => {
            userDispatch({
               type: SIGNUP_SUCCESS,
               payload: res.data.signup.user,
            });

            localStorage.setItem("token", res.data.signup.token);
            localStorage.setItem("username", res.data.signup.user.username);
            localStorage.setItem("user_id", res.data.signup.user.id);
            props.history.push("/home");
            console.log("Successfully registered... ");
         })
         .catch(err => {
            userDispatch({ type: AUTH_ERROR, payload: err });
            alert(err.message);
            console.log(err);
         });
   };

   return (
      <>
         <Grid
            container
            direction="column"
            alignItems="center"
            className={`main-container ${classes.container}`}
         >
            <Grid
               container
               direction="column"
               className={classes.registerContainer}
               alignItems="center"
               margin-bottom={8}
            >
               <Grid item>
                  <Typography variant="h1" align="center">
                     Register
                  </Typography>
               </Grid>

               <Form
                  className={classes.formContainer}
                  data-testid="register-form"
                  onSubmit={onSubmit}
               >
                  <Input
                     type="text"
                     name="first_name"
                     label="First Name"
                     className={classes.textField}
                  />
                  <Input
                     type="text"
                     name="last_name"
                     label="Last Name"
                     className={classes.textField}
                  />
                  <Input
                     type="text"
                     name="username"
                     label="Username"
                     fullWidth
                     autoComplete="username"
                     className={classes.textField}
                  />
                  <Input
                     name="password"
                     label="Password"
                     autoComplete="current-password"
                     type="password"
                     fullWidth
                     minLength={9}
                     className={classes.textField}
                  />
                  <Input
                     name="email"
                     label="Email"
                     type="email"
                     fullWidth
                     className={classes.textField}
                  />
                  <Grid container justify="center" alignItems="center">
                     {userData.isAuthorizing ? (
                        <Loader />
                     ) : (
                        <Button
                           variant="contained"
                           color="primary"
                           type="submit"
                        >
                           <Typography variant="body1" color="secondary">
                              Submit
                           </Typography>
                        </Button>
                     )}
                  </Grid>
               </Form>

               <Grid className={classes.oAuthButton}>
                  <GoogleOAuth />
               </Grid>
            </Grid>
         </Grid>
      </>
   );
};
