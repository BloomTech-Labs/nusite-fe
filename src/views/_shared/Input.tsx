import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";

export const Input = ({ register, name, ...rest }: any) => {
   console.log("name: ", name);
   const { errors } = useForm();
   console.log("see the errors object: ", errors);
   // console.log(TextField);
   const errObj = rest;
   console.log("rest: ", errObj);
   return (
      <>
         <TextField
            label={rest.label}
            name={name}
            inputRef={register({
               required: true || null,
               minLength: rest.minLength || null,
            })}
            variant="outlined"
            error={errors.type}
            {...rest}
         />
      </>
   );
};
