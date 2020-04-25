import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Loader from "../_shared/Loader";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { INITIATE_RESET } from "../../graphql-requests/mutations";
import { InitiateResetData } from "../../types/FormTypes";

export const InitiateReset: React.FC<InitiateResetData> = (
   props: InitiateResetData
) => {
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
   }
   localStorage.clear();
   const [reset] = useMutation(INITIATE_RESET);
   const onSubmit = ({ email }: InitiateResetData) => {
      reset({
         variables: { email },
      })
         .then(res => {
            console.log(res);
            //one-time use cookie gets set here.
            props.history.push("/login");
         })
         .catch(err => {
            alert(err.message);
            console.log(err);
         });
   };

   //use a pop-up alert to tell the user to check the email they used for sign-up for instructions to reset their password.

   return (
      <div className="box">
         <h2>Forgot your password?</h2>
         <Form
            className="reset-form"
            data-testid="reset-form"
            onSubmit={onSubmit}
         >
            <Input name="email" placeholder="Email" type="email" />
            <Button
               variant="contained"
               color="secondary"
               type="submit"
               onClick={submitForm}
            >
               {!state.loading && "Reset Password"}
               {state.loading && <Loader />}
            </Button>
         </Form>
      </div>
   );
};
