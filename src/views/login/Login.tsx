import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { Button, Grid, Typography } from "@material-ui/core/";
import { LOGIN } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import Loader from "../_shared/Loader";
import { LoginFormData } from "../../types/FormTypes";
// import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "./LoginTheme";
import {
   loginStart,
   loginSuccess,
   authError,
} from "../../context/user/actions";
import UserContext from "../../context/user/context";
import { setToken, setUserId } from "../util/useLocalStorage";
import { OAuthContainer } from "../_shared/OAuth/OAuthStyled";
import { OAuthButton } from "../_shared/OAuthButton";
import { providers } from "../../types/OAuthTypes";

export const Login: React.FC<LoginFormData> = (props: LoginFormData) => {
   const { userData, userDispatch } = useContext(UserContext);
   const [login] = useMutation(LOGIN);
   const classes = useStyles();
   const onSubmit = ({ email, password }: LoginFormData) => {
      userDispatch(loginStart());

      login({ variables: { email: email, password: password } })
         .then(res => {
            userDispatch(loginSuccess(res.data.login.user));

            setToken(res.data.login.token);
            localStorage.setItem("username", res.data.login.user.username);
            setUserId(res.data.login.user.id);
         })
         .then(data => {
            props.history.push("/home");
            console.log(`Welcome `);
         })
         .catch(err => {
            userDispatch(authError(err));
            alert(err.message);
         });
   };

   return (
      <Grid
         container
         direction="column"
         alignItems="center"
         className={`main-container ${classes.container}`}
      >
         <Grid
            container
            direction="column"
            className={classes.loginContainer}
            alignItems="center"
         >
            <Grid item>
               <Typography variant="h1" align="center">
                  Login
               </Typography>
            </Grid>
            <Form
               {...console.log(props)}
               className={classes.formContainer}
               data-testid="login-form"
               onSubmit={onSubmit}
            >
               <Input
                  name="email"
                  label="Email"
                  type="email"
                  required={true}
                  fullWidth
                  className={classes.textField}
                  helperText="Please provide a valid email address."
               />
               <Input
                  name="password"
                  label="Password"
                  autoComplete="current-password"
                  type="password"
                  minLength={9}
                  fullWidth
                  required={true}
                  className={classes.textField}
                  helperText="Password must be at least 9 characters"
               />
               <Link to="/initiate">Forgot your password?</Link>
               {userData.isAuthorizing ? (
                  <Loader />
               ) : (
                  <Button
                     variant="contained"
                     color="primary"
                     type="submit"
                     // {...Form.children ? "disabled" : ""}
                  >
                     <Typography variant="body1" color="secondary">
                        Login
                     </Typography>
                  </Button>
               )}
            </Form>
            <Grid item>
               <Typography variant="body1">-OR-</Typography>
            </Grid>
            <Grid item>
               <OAuthContainer>
                  <OAuthButton provider={providers.LINKEDIN} />
                  <OAuthButton provider={providers.GOOGLE} />
               </OAuthContainer>
            </Grid>
         </Grid>
      </Grid>
   );
};
