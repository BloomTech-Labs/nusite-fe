import React, { useContext } from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core/";
import Loader from "../_shared/Loader";
import { RegistrationFormData } from "../../types/FormTypes";
import {
   signupStart,
   signupSuccess,
   authError,
} from "../../context/user/actions";
import UserContext from "../../context/user/context";
import { setToken, setUserId } from "../util/useLocalStorage";
import { OAuthContainer } from "../_shared/OAuth/OAuthStyled";
import { OAuthButton } from "../_shared/OAuthButton";
import { providers } from "../../types/OAuthTypes";

const useStyles = makeStyles(theme => ({
   container: {
      height: "1200px",
      backgroundImage: `url(${require("../../images/register.jpeg")})`,
      backgroundSize: "cover",

      [theme.breakpoints.down("md")]: {
         backgroundPosition: "bottom",
      },
   },
}));

export const Registration: React.FC<RegistrationFormData> = (
   props: RegistrationFormData | any
) => {
   const { userData, userDispatch } = useContext(UserContext);
   const classes = useStyles();
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
      <Grid
         container
         direction="column"
         alignItems="center"
         className={`main-container ${classes.container}`}
      >
         <Grid
            container
            direction="column"
            className="form-border"
            alignItems="center"
         >
            <Grid item>
               <Typography variant="h1" align="center">
                  Register
               </Typography>
            </Grid>
            <Form
               className="form-container"
               data-testid="register-form"
               onSubmit={onSubmit}
            >
               <Input
                  type="text"
                  name="first_name"
                  label="First Name"
                  required
                  className="text-field"
               />
               <Input
                  type="text"
                  name="last_name"
                  label="Last Name"
                  required
                  className="text-field"
               />
               <Input
                  name="email"
                  label="Email"
                  type="email"
                  required
                  fullWidth
                  className="text-field"
               />
               <Input
                  type="text"
                  name="username"
                  label="Username"
                  required
                  fullWidth
                  autoComplete="username"
                  className="text-field"
               />
               <Input
                  name="password"
                  label="Password"
                  autoComplete="current-password"
                  type="password"
                  required
                  fullWidth
                  minLength={9}
                  className="text-field"
                  helperText="password must be at least 9 characters"
               />

               <Grid container justify="center" alignItems="center">
                  {userData.isAuthorizing ? (
                     <Loader />
                  ) : (
                     <Button variant="contained" color="primary" type="submit">
                        <Typography variant="body1" color="secondary">
                           Submit
                        </Typography>
                     </Button>
                  )}
               </Grid>
            </Form>
            <Grid item>
               <Typography variant="body1"> or signup with </Typography>
            </Grid>
            <Grid item>
               <OAuthContainer>
                  <OAuthButton provider={providers.LINKEDIN} />
                  <OAuthButton provider={providers.FACEBOOK} />
                  <OAuthButton provider={providers.GOOGLE} />
               </OAuthContainer>
            </Grid>
         </Grid>
      </Grid>
   );
};
