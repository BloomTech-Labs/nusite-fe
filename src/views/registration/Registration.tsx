import React, { useState } from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import "./Registration.css";
import Loader from "../_shared/Loader";
import { RegistrationFormData } from '../../types/FormTypes'

export const Registration: React.FC<RegistrationFormData> = (props: RegistrationFormData | any) => {
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
   }
   localStorage.clear();
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
            //console.log(res.data);
            localStorage.setItem("token", res.data.signup.token);
            localStorage.setItem("username", res.data.signup.user.username);
            localStorage.setItem("user_id", res.data.signup.user.id);
            props.history.push("/home");
            console.log("Successfully registered... ");
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
         });
   };

   return (
      <>
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
               <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  onClick={submitForm}
               >
                  {!state.loading && "Register"}
                  {state.loading && <Loader />}
               </Button>
            </Form>
         </div>
      </>
   );
};
