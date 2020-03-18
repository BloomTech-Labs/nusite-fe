import React from "react";
import { useForm } from "react-hook-form";
//import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from "../homepage/Header";
import "./Registration.css";

type FormData = {
   firstName: string;
   lastName: string;
   username: string;
   password: string;
   email: string;
   company: string;
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

export const Registration = (props: any) => {
   const { register, handleSubmit, errors } = useForm<FormData>();
   const onSubmit = ({
      firstName,
      lastName,
      username,
      password,
      email,
      company,
   }: FormData) => {
      console.log({ firstName, lastName, username, password, email, company });
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
                  name="firstName"
                  placeholder="First Name"
               />
               {errors.firstName && errors.firstName.type === "required" && (
                  <p>This field is required.</p>
               )}

               <label>Last Name</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
               />
               {errors.lastName && errors.lastName.type === "required" && (
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

               <label>Company</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="company"
                  placeholder="Company (not required)"
               />

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
            <div className="github-btn">
               <div className="github-icon-wrapper">
                  <img
                     className="github-icon"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8YFhYAAAAQDQ0UEhJEQ0MKBgYTERHz8/P6+vpiYWFUU1O0tLQeHBwRDg4qKSmjoqLi4uLT09NJSEhpaGglIyPHxsaYl5eAgIA+PT14d3eJiIggHh7Nzc3d3d3U1NQxMDDr6+uura2Uk5NubW0wLi6EhIS7u7tjYmI4NzdOTU2WlpZaWVlxXGWoAAAIFElEQVR4nO2daZubvA6GB5lxICvZE5JZskynaef//75DdsAWEGLZ9D26P/VqU8wTW5Ys2c7LC8MwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMP8HxO6fgEaglF3vmiPD4PpureeDg7j9mLe/Qhcv5YZgtm8DSek6Lf8I62+kOe/+tnN/nGZb6vlUZrv6fGPQperN9evWZdZnLy/QMTdEcmn9jPXL/s474ukf7C+U/oyEbn4cP3KD9EdV5d3E/nadf3aVQkjUWFwqiT/K/onfEmi77HuS3ekjFy/fildWVvfRWOzx+po+ZS+s8blyLUMlDCuZX95BMQNNceZBAP6jgA00j8uoGVI4HGoxq7lKAwHpjrwDEyHriVl6RqxwDQCGjWprp6eQlV8WLmWdadtdoRegbZrYRfCVxqBicRxI9xG8EUlMJH42YAFcjCVZAI9T06dS6QVmEgcOJYYftEKTCR+urVFsknmDoxdCvxNLzCROHEncGVDYCJx50rgtx2BicRvNwKHSqjmn9K8zywxzk9Qn+smDB/kg21/OnubbRdfVbKkOvoAvThKnjHNSxSfLgQulDF6tZfNdgyPD2AJX/NLV6n27SIKn6ka4J7Ufd8/qFFC557c/9A823ryJpSKufnr9Ac2MWiCgVNlRv1rAe339H/uKZ9p9ezq041RT+b81rB9m3R8AXAtQMnrH8VVRgvGuZT+b/XLsT1ONePIAyWbO5vCub7U66yi2Wh4DTGD4WgWrTq9c10KPMUZRLrHv+c/RcqrZrYETZVsAetJNMKC52AUTdawUP/hTaNQdowqKKGrm0a0TmtT+izdJ4ba59tMMWrTMmBuERDqFLYGxp5fis5MEoUGW9A3YC37FgptZo1cob1O1HchvUJ7EXhLnxw1qFBrh0lgsDTXRBHYognK582qaOdST++QCND5QsPN6/zhkXzYRMM7FlKrMU1t5mgbNjJvv7DWDQYdHWyBafBbxMGLMMYMcYOuvMSroSYK0KwLbwpNhVVFbdDnM2K0dfhlrBHUDm0MU3SQSpMDaIJJpHeJ2Dzu+QbdYeLy11jGjnw23aHz+NxoO6gpkkduS2QeN55H6SAlH92C2SQB+tVuDbeky5Mc6RMbIjZ4fGG8qTEWHNIa4l8sJDafCdNmSjzy6LuNWYf5RFiA+CVij4i0SrL6RoJT2g1h2ERjMJy5gwQ2tFMNNsGROCksuDCZLVFAl/cU8TC2wjCYtVTBImKarxVrjDK9r6nHHPFpCkNTfWxKWmhDnAXRuhTx+aSRKdKm/CFp7Uf/fRoPENMc+nqFv0laQ0YMqcsf6C3Dch+aXadlUTZJnBE0pT0sqPlL0tqJUK2vnyAKM5Z6myBVqNtl4OX3KBhjjYTehKMU60PLHp/SDpFvlSaQQgpQTuZSmkAKLUA58Ic0mwiwjAlpTIMW1ihMAyk10+7JwJIYJEHN3l7G5A5WWSNxF6jRm0yu58Erl+aXwGiJzckan2IG3yJttWjCiwtYnsYTf4y3hcTdniQ974Um9c0bB14/oN2Gqd8N5RGcGMB8BXXxaYIdAvJN2z9eQKTdZ1pQfjbr9LGqhecL2nNQaAnY86XRmhDmDMk30uJTjdl6Albjol3/nviDHxYxGC9iywrPwrEE3BCTycbYOP1C1jAEM5oC6vMT5MFQIwVnw4kSl2n6BSfvwcwsgG9KsrITGildXNo3cby8SKCNzYmjwvNMMHg2egs7RQ3QBqUXkIrQBfFkFmXUK/4Gbez0RndFnfGhU3+tGJRcAeNLGwe7s76qJUHmpnYJcT1jCf+WHemj3hB1Ib1wg+lktT/kz7UC7B+/X264Kr/jzdJp2VSW77KzfDPPf/kSPnePrAGGUZU77Kwd7vq8Dctb0Slc5N+vDyDibRWVw+5iXe3osLWzXalszT3c/la74HQwexxHXfR0XjeKx9WPf9s6UPKS7kQPllfT+NCOsuPpUXz5P0mdJK3QhfaO5adTbuKWZkPWjoV5lU80xFax2IUvL4e01dymcO26QxSG48URUu6rsnmTa7a7brvadBuIS94LqxOoWAnY7mT30l8jNc2BoX7Jiqp6J1q+OWKTnVauravjtDQZjubU8g+yfatCNp15O2uhrHxKc38Vb4DpT6kVKSwzBnRbmMb5AK4sVC44AZR5jv0Lo7N3t9wPI2xT0Vfi8kuvQMJPcWUEUmzRLSNbG7pnF4LV9VoIaMUVEmNVFAqLB9VTZPJF/a/Uv3xEq1+r3Xe1yQ/N/d5xdQNPmLmCp7ahIDuf9APEMhlTFHUvHcN2P6QEujDCM5l5sG4ZuFQh0Ox8rEbGK9Yse5UplAenl+6l/XXN+aBEofAdX5y4T0ls1ZptihWKPuXekkrsM71Yo9ZdqFA48hMZ9hlbXD88sRcpFF4DBOai7Rb4i9QvqwzLc0cFCmXP+RA9k82Cn/JPr5M4nvzpAZQX3HCFsGzENcJHtvkklH+8s0wKv8pZE1Qh0JcKqzPS3T53MqTaCht1nXfCBrmMtrZC2bwfD1CS3k8phNeGzDFpZn1NN9ZTKEi349cnmKjZ+ToKfVjavUDwAWZKAbeGQrByy05tdrky28MKa5dXrbGZZBzHgwrlMyVya7y3U/34kEKAn3/kp8mOV+xeXEeF3MalaN4C2Dd2glEJdv55sFbYsHjcSZrEsoN5w+1PYXb6XUe/guNeJSHsorm/YlVA8B1VK9qGDYxfGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhmP8q/wOa7F1sPxWUkQAAAABJRU5ErkJggg=="
                     alt=""
                  />
               </div>
               <a href="https://github.com/">
                  <p className="btn-text">
                     <b>Sign in with github</b>
                  </p>
               </a>
            </div>
            <br />
         </div>
      </>
   );
};
