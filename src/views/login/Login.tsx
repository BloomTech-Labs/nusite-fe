import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { Button, Grid } from "@material-ui/core/";
import { LOGIN } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import Loader from "../_shared/Loader";
import { LoginFormData } from "../../types/FormTypes";
import { makeStyles } from "@material-ui/core/styles";
import GoogleOAuth from "../_shared/GoogleOAuth";
import {
   LOGIN_START,
   LOGIN_SUCCESS,
   AUTH_ERROR,
} from "../../context/user/actions";
//import TextField from "@material-ui/core/TextField";
import UserContext from "../../context/user/context";

const useStyles = makeStyles(theme => ({
   container: {
      display: "flex",
      flexWrap: "wrap",
      backGroundFilter: "blur(10px)",
      backdropFilter: "blur(10px)",
   },
   textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
      alignItems: "center",
      textAlign: "center",
   },
   button: {
      margin: theme.spacing(1),
   },
}));

export const Login: React.FC = (props: LoginFormData | any) => {
   const { userData, userDispatch } = useContext(UserContext);
   const [login] = useMutation(LOGIN);
   const classes = useStyles();
   const onSubmit = ({ email, password }: LoginFormData) => {
      userDispatch({ type: LOGIN_START, payload: null });

      login({ variables: { email: email, password: password } })
         .then(res => {
            userDispatch({ type: LOGIN_SUCCESS, payload: res.data.login.user });

            localStorage.setItem("token", res.data.login.token);
            localStorage.setItem("username", res.data.login.user.username);
            localStorage.setItem("user_id", res.data.login.user.id);
         })
         .then(data => {
            props.history.push("/home");
            console.log(`Welcome `);
         })
         .catch(err => {
            userDispatch({ type: AUTH_ERROR, payload: err });
            alert(err.message);
         });
   };

   return (
      <>
         <Grid>
            <Form
               className={classes.container}
               data-testid="login-form"
               onSubmit={onSubmit}
            >
               <Input name="email" label="Email" type="email" />
               <Input
                  name="password"
                  label="Password"
                  autoComplete="current-password"
                  type="password"
                  minLength={9}
               />
               <Link to="/initiate">Forgot your password?</Link>
               {userData.isAuthorizing ? (
                  <Loader />
               ) : (
                  <Button
                     variant="contained"
                     color="secondary"
                     type="submit"
                     value="submit"
                  >
                     Login
                  </Button>
               )}
            </Form>
            <GoogleOAuth />
         </Grid>
      </>
   );
};
