import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Header from "../_shared/Header";
import "./Login.css";
import { LOGIN } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
//import {TextField}from "@material-ui/core/";

type FormData = {
   email: string;
   password: string;
};

export const Login = (props: any) => {
   const { register, handleSubmit, errors } = useForm<FormData>();
   const [login] = useMutation(LOGIN);
   const onSubmit = ({ email, password }: FormData) => {
      login({
         variables: {
            email: email,
            password: password,
         },
      })
         .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.login.token);
            localStorage.setItem("username", res.data.login.user.username);
            localStorage.setItem("user_id", res.data.login.user.id);
         })
         .then(data => {
            props.history.push("/home");
            console.log("Success");
         })
         .catch(err => err.message);
   };

   //if (loading) return <h4>Loading...</h4>;

   return (
      <>
         <Header />
         <div className="box">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
