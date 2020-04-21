import React from "react";

export const Input = ({ register, errors, name, ...rest }: any) => {
   return (
      <>
         <label>{rest.placeholder}</label>
         <input
            name={name}
            ref={register({
               required: true,
               minLength: rest.minLength || null,
            })}
            errors={errors}
            {...rest}
         />
      </>
   );
};
