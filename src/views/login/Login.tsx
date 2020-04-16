import React from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import Button from "@material-ui/core/Button";
import "./Login.css";
import { LOGIN } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";

interface LoginFormData {
   email: string;
   password: string;
};

export const Login = (props: LoginFormData | any) => {
   console.log(props);
   const [login] = useMutation(LOGIN);
   const onSubmit = ({ email, password }: LoginFormData) => {
      login({ variables: { email: email, password: password } })
         .then(res => {
            localStorage.setItem("token", res.data.login.token);
            localStorage.setItem("username", res.data.login.user.username);
            props.history.push("/home");
            console.log("Success: ", res.data);
         })
         .catch(err => err.message);
   };

   return (
      <>
         <h2> Login </h2>
         <Form className="login-form" onSubmit={onSubmit}>
            <Input name="email" placeholder="Email" />
            <Input
               name="password"
               placeholder="Password"
               autoComplete="current-password"
               type="password"
               minLength={9}
            />
            <Button
               variant="contained"
               color="primary"
               type="submit"
               value="submit"
            >
               Submit
            </Button>
         </Form>
      </>
   );
};