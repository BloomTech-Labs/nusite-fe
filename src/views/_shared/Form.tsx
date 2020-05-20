import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
export const Form = ({
   control,
   direction,
   defaultValues,
   reValidateMode,
   mode,
   getValues,
   children,
   onSubmit,
   ...props
}: any) => {
   const methods = useForm<{ children: any }>({
      defaultValues: {},
      mode: "onChange",
      reValidateMode: "onChange",
      validationSchema: undefined,
      validateCriteriaMode: "all",
      submitFocusError: true,
   });
   const { handleSubmit } = methods;
   const { errors } = methods;
   // console.log(methods);

   //if there's an error, disable the button by dynamically adding the "disabled" prop to the button.

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} {...props}>
            <Grid container justify="space-between">
               {Array.isArray(children)
                  ? children.map(child => {
                       return child.props.name
                          ? React.createElement(child.type, {
                               ...child.props,
                               register: methods.register,
                               errors,
                               key: child.props.name,
                               values: methods.getValues(),
                            })
                          : child;
                    })
                  : children}
            </Grid>
         </form>
      </>
   );
};
