import React from 'react'
import { useForm } from 'react-hook-form'
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from '../homepage/Header';
import './Registration.css';

type FormData = {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    company: string;
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: 200,
//       },
//       container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//       },
//       button: {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

export const Registration = () => {
    const { register, handleSubmit, errors } = useForm<FormData>()
    const onSubmit = ({firstName, lastName, username, password, email, company} : FormData) => {
        console.log({firstName, lastName, username, password, email, company})
    }

    return(
        <>
        <Header />
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input ref={register({ required: true, minLength: 2})} 
                type="text" 
                name="firstName" 
                placeholder="First Name"/>
                {errors.firstName && errors.firstName.type === "required" && <p>This field is required.</p>}

                <label>Last Name</label>
                <input ref={register({ required: true})} 
                type="text" 
                name="lastName" 
                placeholder="Last Name" />
                {errors.lastName && errors.lastName.type === "required"&& <p>This field is required.</p>}

                <label>Username</label>
                <input ref={register({ required: true})} 
                type="text" 
                name="username" 
                placeholder="Username" 
                autoComplete="username"/>
                {errors.username && errors.username.type === "required"&& <p>This field is required.</p>}

                <label>Password</label>
                <input ref={register({ required: true, minLength: 9})} 
                type="password" 
                name="password" 
                placeholder="Password" 
                autoComplete="current-password"/> 
                {errors.password && errors.password.type === "required" && <p>This field is required.</p>}
                {errors.password && errors.password.type === "minLength" && <p>Password must be at least 9 characters.</p>}

                <label>Email</label>
                <input ref={register({ required: true})} 
                type="email" 
                name="email" 
                placeholder="Email" /> 
                {errors.email && errors.email.type === "required" && <p>This field is required.</p>}

                <label>Company</label>
                <input ref={register({ required: true})} 
                type="text" 
                name="company" 
                placeholder="Company (not required)"/>
                
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </>
    )
}