import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ register, errors, name, ...rest }: any) => {
   // console.log("see the errors object: ", errors);
   // console.log(TextField);
   console.log("rest: ", rest);
   return (
      <>
         {errors.name && errors.name.type === "required" && (
            <p> This field is required. </p>
         )}
         {errors.name && errors.name.type === "minLength" && (
            <p>
               {name} must be at least {rest.minLength} characters long
            </p>
         )}
         <TextField
            label={rest.label}
            name={name}
            inputRef={register({
               required: true || null,
               minLength: rest.minLength || null,
            })}
            variant="outlined"
            error={errors.name}
            {...rest}
         />
      </>
   );
};
