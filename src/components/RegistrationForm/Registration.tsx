import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    company: string;
}

export const Registration = () => {
    const { register, handleSubmit, errors } = useForm<FormData>()
    const onSubmit = ({firstName, lastName, username, password, email, company} : FormData) => {
        console.log({firstName, lastName, username, password, email, company})
    }

    return(
        <>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input ref={register({ required: true, minLength: 2})} type="text" name="firstName" placeholder= "First Name"/>
                {errors.firstName && errors.firstName.type === "required" && <p>This field is required.</p>}

                <label>Last Name</label>
                <input ref={register({ required: true})} type="text" name="lastName" placeholder = "Last Name" />
                {errors.lastName && errors.lastName.type === "required"&& <p>This field is required.</p>}

                <label>Username</label>
                <input ref={register({ required: true})} type="text" name="username" placeholder="Username" autoComplete="username"/>
                {errors.username && errors.username.type === "required"&& <p>This field is required.</p>}

                <label>Password</label>
                <input ref={register({ required: true, minLength: 9})} type="password" name="password" placeholder="Password" autoComplete="current-password"/> 
                {errors.password && errors.password.type === "required" && <p>This field is required.</p>}
                {errors.password && errors.password.type === "minLength" && <p>Password must be at least 9 characters.</p>}

                <label>Email</label>
                <input ref={register({ required: true})} type="email" name="email" placeholder="Email" /> 
                {errors.email && errors.email.type === "required" && <p>This field is required.</p>}

                <label>Company</label>
                <input ref={register({ required: true})} type="text" name="company" placeholder="Company (not required)"/>
                
                <button type="submit">Submit</button>
            </form>
        </>
    )
}