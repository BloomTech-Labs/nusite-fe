import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Loader from "../_shared/Loader";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { FINALIZE_RESET } from "../../graphql-requests/mutations";
import { FinalizeResetData } from "../../types/FormTypes";

export const FinalizeReset: React.FC<FinalizeResetData> = (
   props: FinalizeResetData
) => {
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
   }
   localStorage.clear();
   const [finalize] = useMutation(FINALIZE_RESET);
   const onSubmit = ({ email, password }: FinalizeResetData) => {
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
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Password" type="password" />
            <Button
               variant="contained"
               color="secondary"
               type="submit"
               onClick={submitForm}
            >
               {!state.loading && "Confirm New Password"}
               {state.loading && <Loader />}
            </Button>
         </Form>
      </div>
   );
};
