import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ register, errors, name, ...rest }: any) => {
   console.log("updated errors object: ", errors);
   console.log(`inherited ${name} props: `, rest);
   const { email, password, first_name, last_name, username } = errors;
   console.log("email error: ", email);
   console.log("password error: ", password);

   return (
      <>
         <TextField
            name={name}
            type={rest.type}
            label={rest.label}
            inputRef={register({
               required: {
                  value: rest.required || null,
                  message: "This field is required",
               },
               minLength: {
                  value: rest.minLength || null,
                  message: `This field must be at least ${rest.minLength} characters long.`,
               },
            })}
            variant="outlined"
            errors={errors}
            error={
               email && name === "email"
                  ? true
                  : password && name === "password"
                  ? true
                  : first_name && name === "first_name"
                  ? true
                  : last_name && name === "last_name"
                  ? true
                  : username && name === "username"
                  ? true
                  : false
            }
            helperText={
               email && email.type === "required" && name === "email"
                  ? email.message
                  : password &&
                    password.type === "required" &&
                    name === "password"
                  ? password.message
                  : password &&
                    name === "password" &&
                    password.type === "minLength"
                  ? password.message
                  : first_name &&
                    first_name.type === "required" &&
                    name === "first_name"
                  ? first_name.message
                  : last_name &&
                    last_name.type === "required" &&
                    name === "last_name"
                  ? last_name.message
                  : username &&
                    username.type === "required" &&
                    name === "username"
                  ? username.message
                  : null
            }
            {...rest}
         />
      </>
   );
};
