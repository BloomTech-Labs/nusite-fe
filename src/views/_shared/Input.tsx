import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ register, errors, name, ...rest }: any) => {
   // console.log(name);
   console.log("updated errors object: ", errors);
   console.log(`inherited ${name} props: `, rest);
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
               errors.email && name === "email"
                  ? true
                  : errors.password && name === "password"
                  ? true
                  : errors.first_name && name === "first_name"
                  ? true
                  : errors.last_name && name === "last_name"
                  ? true
                  : errors.username && name === "username"
                  ? true
                  : false
            }
            {...rest}
         />
      </>
   );
};
