import React, { useState } from "react";
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

export const Login: React.FC = (props: LoginFormData | any) => {
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
      //setTimeout(() => setState({ ...state, loading: false }), 2500);
   }
   const [login] = useMutation(LOGIN);
   const onSubmit = ({ email, password }: LoginFormData) => {
      login({ variables: { email: email, password: password } })
         .then(res => {
            //console.log(res.data);
            localStorage.setItem("token", res.data.login.token);
            localStorage.setItem("username", res.data.login.user.username);
            localStorage.setItem("user_id", res.data.login.user.id);
         })
         .then(data => {
            props.history.push("/home");
            console.log(`Welcome `);
         })
         .catch(err => alert(err.message));
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
               <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  value="submit"
                  onClick={submitForm}
               >
                  {!state.loading && "Login"}
                  {state.loading && <Loader />}
               </Button>
               <br />
            </Form>
            <GoogleLogin />
            <br />
         </div>
      </>
   );
};
