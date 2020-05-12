import React, { useContext } from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import "./Registration.css";
import Loader from "../_shared/Loader";
import { RegistrationFormData } from "../../types/FormTypes";
import {
   signupStart,
   signupSuccess,
   authError,
} from "../../context/user/actions";
import UserContext from "../../context/user/context";
import { setToken, setUserId } from "../util/useLocalStorage";

export const Registration: React.FC<RegistrationFormData> = (
   props: RegistrationFormData | any
) => {
   const { userData, userDispatch } = useContext(UserContext);

   const [signup] = useMutation(SIGNUP);
   const onSubmit = ({
      first_name,
      last_name,
      username,
      password,
      email,
   }: RegistrationFormData) => {
      userDispatch(signupStart());

      signup({
         variables: { first_name, last_name, username, password, email },
      })
         .then(res => {
            userDispatch(signupSuccess(res.data.signup.user));

            setToken(res.data.signup.token);
            localStorage.setItem("username", res.data.signup.user.username);
            setUserId(res.data.signup.user.id);
            props.history.push("/home");
            console.log("Successfully registered... ");
         })
         .catch(err => {
            userDispatch(authError(err));
            alert(err.message);
            console.log(err);
         });
   };

   return (
      <>
         <div className="box">
            <Form
               className="register-form"
               data-testid="register-form"
               onSubmit={onSubmit}
            >
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
               <Input name="email" placeholder="Email" type="email" />
               {userData.isAuthorizing ? (
                  <Loader />
               ) : (
                  <Button variant="contained" color="secondary" type="submit">
                     Register
                  </Button>
               )}
            </Form>
         </div>
      </>
   );
};
