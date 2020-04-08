import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Header from "../_shared/Header";
import "./Login.css";
// import gql from "graphql-tag";
// import { Mutation } from "react-apollo";
// import { gql } from "apollo-boost";

type FormData = {
   username: string;
   password: string;
   email: string;
};

// export const SIGNUP_MUTATION = gql`
//    mutation ($username: String!, $first_name: String!, $last_name: $email: String!, $password: String!) {
//       signup(username: $username, first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
//          token
//          users {
//             username
//             email
//          }
//       }
//    }
// `;
//
// export const LOGIN_MUTATION = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       users {
//         username
//       }
//     }
//   }
// `;

// JUST AN AXIOS TEST for sending data to API, GQL mutations need to be intgrated

export const Login = (props: any) => {
   const { register, errors } = useForm<FormData>();

   const [users, setUsers] = useState({
      username: "",
      email: "",
      password: "",
   });

   const handleChange = (event: any) => {
      event.preventDefault();
      setUsers({
         ...users,
         [event.target.name]: event.target.value,
      });
   };

   const login = (event: any) => {
      event.preventDefault();

      axios
         .post("http://localhost:4000", users, {
            withCredentials: true,
         })
         .then(result => {
            console.log(result.data);
            localStorage.setItem("token", result.data.token);
            props.history.push("/");
         })
         .catch(error => {
            if (error.response) {
               // The request was made, but the server responded with a status code
               // that falls out of the range of 2xx
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
            } else {
               // Something happened in setting up the request that triggered an Error
               console.log("Error", error.message);
            }
            console.log(error.config);
         });
   };

   return (
      <>
         <Header />
         <div className="box">
            <form className="login-form" onSubmit={login}>
               <label>Username</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
                  value={users.username}
                  onChange={handleChange}
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
                  value={users.password}
                  onChange={handleChange}
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
                  value={users.email}
                  onChange={handleChange}
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
