import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
    username: string;
    password: string;
    email: string;
}

export const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormData>()
    const onSubmit = ({username, password, email } : FormData) => {
        console.log({username, password, email })
    }

    return(
        <>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
     
                <label>Username</label>
                <input ref={register({ required: true})} type="text" name="username" placeholder="Username" autoComplete="username"/>
                {errors.username && errors.username.type === "required"&& <p>This field is required.</p>}

                <label>Password</label>
                <input ref={register({ required: true, minLength: 9})} type="password" name="password" placeholder="Password" autoComplete="current-password"/> 
                {errors.password && errors.password.type === "required" && <p>This field is required.</p>}

                <label>Email</label>
                <input ref={register({ required: true})} type="email" name="email" placeholder="Email" /> 
                {errors.email && errors.email.type === "required" && <p>This field is required.</p>}

                <button type="submit">Submit</button>
            </form>
        </>
    )
}