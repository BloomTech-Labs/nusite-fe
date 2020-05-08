import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import Button from "@material-ui/core/Button";
import "./Login.css";
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
         <div className="box">
            <Form
               className={classes.container}
               data-testid="login-form"
               onSubmit={onSubmit}
            >
               {/*<TextField id="filled-basic" className={classes.textField}>*/}
               <Input name="email" placeholder="Email" type="email" />
               {/*<TextField id="filled-basic" className={classes.textField}>*/}
               <Input
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  type="password"
                  minLength={9}
               />
               <br />
               <Link to="/initiate">Forgot your password?</Link>
               <br />
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
               <br />
            </Form>
            <GoogleOAuth />
            <br />
         </div>
      </>
   );
};
