import { RouterProps } from 'react-router'

declare module "FormTypes" {
    export interface RegistrationFormData extends RouterProps {
        username: string;
        password: string;
        first_name: string;
        last_name: string;
        email: string;
    }

    
}