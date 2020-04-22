import React from "react";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from '@apollo/react-hooks'

interface ResetFormData {
    email: string;
}

export const InitiateReset: React.FC<ResetFormData> = (props: ResetFormData) => {
    const [reset] = useMutation(RESET)

    const onSubmit = ({ email } : ResetFormData) => {
        reset({ variables: { email: email } })
            .then(res => {
                console.log(res)
            })
            .catch(err => alert(err.message))
    }

   return (
      <div className="reset-form-container">
         <Form className="reset-form" data-testid="reset-form" onSubmit={onSubmit}>
            <Input name="email" type="email" placeholder="Email" />
         </Form>
      </div>
   );
};
