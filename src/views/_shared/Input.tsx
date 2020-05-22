import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ register, errors, name, ...rest }: any) => {
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
            error={!!errors[name]}
            helperText={errors[name]?.message}
            {...rest}
         />
      </>
   );
};
