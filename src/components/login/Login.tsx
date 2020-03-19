import React from "react";
import { useForm } from "react-hook-form";
//import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from "../_shared/Header";
import "./Login.css";

type FormData = {
   username: string;
   password: string;
   email: string;
};

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: 200,
//       },
//       container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//       },
//       button: {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

export const Login = () => {
   const { register, handleSubmit, errors } = useForm<FormData>();
   const onSubmit = ({ username, password, email }: FormData) => {
      console.log({ username, password, email });
   };

   return (
      <>
         <Header />
         <div className="box">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="google-btn">
               <div className="google-icon-wrapper">
                  <img
                     className="google-icon"
                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                     alt=""
                  />
               </div>
               <p className="btn-text">
                  <b>Sign in with google</b>
               </p>
            </div>
            <br />
            <br />
         </div>
      </>
   );
};
