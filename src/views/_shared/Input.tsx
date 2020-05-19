import React from "react";
import { TextField } from "@material-ui/core";
import { ErrorMessage } from "react-hook-form";
export const Input = ({ register, errors, name, ...rest }: any) => {
   return (
      <>
         <ErrorMessage name={name} errors={errors} />
         <TextField
            label={rest.label}
            name={name}
            inputRef={register({
               required: true || null,
               minLength: rest.minLength || null,
            })}
            variant="outlined"
            {...rest}
         />
      </>
   );
};
