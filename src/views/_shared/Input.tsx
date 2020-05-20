import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";

export const Input = ({ register, name, ...rest }: any) => {
   const { errors } = useForm();
   const propsObj = rest;
   console.log("props obj: ", propsObj);
   return (
      <>
         <TextField
            name={name}
            type={rest.type}
            {...console.log("check to see the type: ", rest.type)}
            label={rest.label}
            inputRef={register({
               required: "This field is required.",
               minLength: rest.minLength || null,
            })}
            variant="outlined"
            errormsg={errors}
            error={propsObj.errors && propsObj.errors.password ? true : false}
            {...rest}
         />
      </>
   );
};
