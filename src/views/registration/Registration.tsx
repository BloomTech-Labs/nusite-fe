import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../_shared/Input";
//import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
// import Header from "../_shared/Header";
import "./Registration.css";

type FormData = {
   username: string;
   password: string;
   first_name: string;
   last_name: string;
   email: string;
};

export const Registration = (props: FormData | any) => {
   const { register, handleSubmit, errors } = useForm<FormData>();
   const [signup] = useMutation(SIGNUP);
   const onSubmit = ({
      first_name,
      last_name,
      username,
      password,
      email,
   }: FormData) => {
      signup({
         variables: { first_name, last_name, username, password, email },
      })
         .then(res => {
            localStorage.setItem("token", res.data.signup.token);
            localStorage.setItem("username", res.data.signup.user.username);
         })
         .then(data => {
            props.history.push("/home");
            console.log(data);
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
         });
   };

   return (
      <>
         <div className="box">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
               <Input
                  ref={register({ required: true })}
                  type="text" name="first_name" placeholder="First Name" />
               {errors.first_name && errors.first_name.type === "required" && (
                  <p>This field is required.</p>
               )}

               <Input
                  props={register}
                  ref={register({ required: true })}
                  type="text" name="last_name" placeholder="Last Name" />
               {errors.last_name && errors.last_name.type === "required" && (
                  <p>This field is required.</p>
               )}

               <Input
                  ref={register({ required: true })}
                  type="text" name="username" placeholder="Username" />
               {errors.username && errors.username.type === "required" && (
                  <p>This field is required.</p>
               )}

               <Input
                  ref={register({ required: true, minLength: props.minLength })}
                  type="password" name="password" placeholder="Password"
                  autoComplete="current-password" minLength={9}
               />
               {errors.password && errors.password.type === "required" && (
                  <p>This field is required.</p>
               )}

               {errors.password && errors.password.type === "minLength" && (
                  <p>{props.placeholder} must be at least 9 characters.</p>
               )}

               <Input
                  type="email" name="email" placeholder="Email" />
               {errors.email && errors.email.type === "required" && (
                  <p>This field is required.</p>
               )}

               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>
            </form>
         </div>
      </>
   );
};