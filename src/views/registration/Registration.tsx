import React from "react";
import { useForm } from "react-hook-form";
//import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import Header from "../_shared/Header";
import "./Registration.css";

type FormData = {
   username: string;
   password: string;
   first_name: string;
   last_name: string;
   email: string;
};

export const Registration = (props: any) => {
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
            console.log(res.data);
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
         <Header />
         <div className="box">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
               <label>First Name</label>
               <input
                  ref={register({ required: true, minLength: 2 })}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
               />
               {errors.first_name && errors.first_name.type === "required" && (
                  <p>This field is required.</p>
               )}

               <label>Last Name</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
               />
               {errors.last_name && errors.last_name.type === "required" && (
                  <p>This field is required.</p>
               )}

               <label>Username</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
               />
               {errors.username && errors.username.type === "required" && (
                  <p>This field is required.</p>
               )}

               <label>Password</label>
               <input
                  ref={register({ required: true, minLength: 9 })}
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
               />
               {errors.password && errors.password.type === "required" && (
                  <p>This field is required.</p>
               )}
               {errors.password && errors.password.type === "minLength" && (
                  <p>Password must be at least 9 characters.</p>
               )}

               <label>Email</label>
               <input
                  ref={register({ required: true })}
                  type="email"
                  name="email"
                  placeholder="Email"
               />
               {errors.email && errors.email.type === "required" && (
                  <p>This field is required.</p>
               )}

               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>

               <br />
            </form>
            <br />
            
            <br />
         </div>
      </>
   );
};
