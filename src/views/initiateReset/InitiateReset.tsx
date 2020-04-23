import React from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { INITIATE_RESET } from "../../graphql-requests/mutations";
import { ResetFormData } from "../../types/FormTypes";

export const InitiateReset: React.FC<ResetFormData> = (
   props: ResetFormData
) => {
   //    const [reset] = useMutation(INITIATE_RESET);
   const onSubmit = ({ email }: ResetFormData) => {
      console.log(email);
      //   reset({
      //      variables: { email },
      //   })
      //      .then(res => {
      //         console.log(res);
      //         props.history.push("/login");
      //      })
      //      .catch(err => alert(err.message));
   };

   return (
      <div className="reset-form-container">
         <h2>Forgot your password?</h2>
         <Form
            className="reset-form"
            data-testid="reset-form"
            onSubmit={onSubmit}
         >
            <Input name="email" placeholder="Email" type="email" />
         </Form>
      </div>
   );
};
