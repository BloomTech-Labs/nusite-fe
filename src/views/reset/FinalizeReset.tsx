import React, { useState } from "react";
import { PasswordResetData } from "../../types/FormTypes";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { FINALIZE_RESET } from "../../graphql-requests/mutations";

export const FinalizeReset: React.FC<PasswordResetData> = (
   props: PasswordResetData
) => {
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
   }
   localStorage.clear();
   const [finalize] = useMutation(FINALIZE_RESET);
   const onSubmit = ({ email, password }: PasswordResetData) => {
      finalize({
         variables: { email, password },
      })
         .then(res => {
            console.log(res);
            alert("Password successfully changed. Please log in.");
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
         });
   };
   return (
      <div className="box finalize-reset-form">
         <h2>Choose a new password</h2>
         <Form
            className="finalize-reset-form"
            data-testid="finalize-reset-form"
            onSubmit={onSubmit}
         >
            <Input name="password" placeholder="Password" type="password" />
         </Form>
      </div>
   );
};

// create a form - (email, newPassword) => change password in the back end, and redirect the user to login with the new password.
