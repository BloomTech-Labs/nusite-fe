import React from "react";
import { useForm } from "react-hook-form";
// import { Input } from "../_shared/Input";
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
   const onSubmit = ({first_name, last_name, username, password, email } : FormData) => {
      signup({
         variables: { first_name, last_name, username, password, email },
      })
         .then(res => {
            localStorage.setItem("token", res.data.signup.token);
            localStorage.setItem("username", res.data.signup.user.username);
            props.history.push("/home");
            console.debug(res)
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
               

               <input
                  ref={register({ required: true, minLength: 2 })}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
               />

               {/* <Input
                  type="text" name="first_name" placeholder="First Name" /> */}
               
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
               />
               {/* <Input
                  type="text" name="last_name" placeholder="Last Name" /> */}

               <input
                  ref={register({ required: true })}
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
               />
               {/* <Input
                  type="text" name="username" placeholder="Username" />        */}

               <input
                  ref={register({ required: true, minLength: 9 })}
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
               />
               {/* <Input
                  type="password" name="password" placeholder="Password"
                  autoComplete="current-password" minLength={9}/> */}
            

               <input
                  ref={register({ required: true })}
                  type="email"
                  name="email"
                  placeholder="Email"
               />
               {/* <Input
                  type="email" name="email" placeholder="Email" /> */}

               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>
            </form>
         </div>
      </>
   );
};
