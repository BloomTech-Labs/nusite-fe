import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Loader from "../_shared/Loader";
import { Form } from "../_shared/Form";
import { Input } from "../_shared/Input";
import { useMutation } from "@apollo/react-hooks";
import { INITIATE_RESET } from "../../graphql-requests/mutations";
import { ResetFormData } from "../../types/FormTypes";

export const InitiateReset: React.FC<ResetFormData> = (
   props: ResetFormData
) => {
   const [state, setState] = useState({ loading: false });
   function submitForm() {
      setState({ ...state, loading: true });
   }
   localStorage.clear();
   const [reset] = useMutation(INITIATE_RESET);
   const onSubmit = ({ email }: ResetFormData) => {
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
