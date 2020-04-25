import { RouterProps } from "react-router";

export interface RegistrationFormData extends RouterProps {
   username: string;
   password: string;
   first_name: string;
   last_name: string;
   email: string;
}

export interface LoginFormData extends RouterProps {
   email: string;
   password: string;
}

export interface InitiateResetData extends RouterProps {
   email: string;
}

export interface FinalizeResetData extends RouterProps {
   email: string;
   password: string;
}
