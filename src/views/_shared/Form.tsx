import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
export const Form = ({
   direction,
   defaultValues,
   children,
   onSubmit,
   ...props
}: any) => {
   const methods = useForm({ defaultValues });
   const { handleSubmit } = methods;
   //console.log("Methods: ", methods);
   return (
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
         <Grid container justify="space-between">
            {Array.isArray(children)
               ? children.map(child => {
                    return child.props.name
                       ? React.createElement(child.type, {
                            ...child.props,
                            register: methods.register,
                            errors: methods.errors,
                            key: child.props.name,
                         })
                       : child;
                 })
               : children}
         </Grid>
      </form>
   );
};
