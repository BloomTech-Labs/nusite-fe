import React from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import "./Registration.css";
//import { Loading } from "../_shared/Loading";

interface RegistrationFormData {
   username: string;
   password: string;
   first_name: string;
   last_name: string;
   email: string;
}

export const Registration = (props: RegistrationFormData | any) => {
   const [signup] = useMutation(SIGNUP);
   const onSubmit = ({
      first_name,
      last_name,
      username,
      password,
      email,
   }: RegistrationFormData) => {
      signup({
         variables: { first_name, last_name, username, password, email },
      })
         .then(res => {
            localStorage.setItem("token", res.data.signup.token);
            localStorage.setItem("username", res.data.signup.user.username);
            props.history.push("/home");
            console.log("Success: ", res);
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
         });
   };

   return (
      <>
         <h2> Registration </h2>
         <div className="box">
            <Form className="register-form" onSubmit={onSubmit}>
               <Input type="text" name="first_name" placeholder="First Name" />
               <Input type="text" name="last_name" placeholder="Last Name" />
               <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
               />
               <Input
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  type="password"
                  minLength={9}
               />
               <Input name="email" placeholder="Email" type="text" />
               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>
            </Form>
         </div>
      </>
   );
};
