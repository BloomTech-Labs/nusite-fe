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
import GoogleLogin from "../_shared/GoogleLogin.jsx";
import {
   LOGIN_END,
   LOGIN_START,
   LOGIN_SUCCESS,
   AUTH_ERROR,
} from "../../context/user/actions";
import UserContext from "../../context/user/context";

export const Login: React.FC = (props: LoginFormData | any) => {
   const { userData, userDispatch } = useContext(UserContext);
   const [login] = useMutation(LOGIN);

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
            userDispatch({ type: LOGIN_END, payload: null });
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
               className="login-form"
               data-testid="login-form"
               onSubmit={onSubmit}
            >
               <Input name="email" placeholder="Email" type="email" />
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
            <GoogleLogin />
            <br />
         </div>
      </>
   );
};
