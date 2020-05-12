import React from "react";
import { TextField } from "@material-ui/core";
export const Input = ({ register, errors, name, ...rest }: any) => {
   return (
      <>
         {/* <label>{rest.placeholder}</label> */}
         <TextField
            label={rest.label}
            name={name}
            inputRef={register({
               required: true,
               minLength: rest.minLength || null,
            })}
            variant="outlined"
            errors={errors}
            {...rest}
         />
      </>
   );
};
