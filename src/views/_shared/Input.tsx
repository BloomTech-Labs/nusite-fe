import React from 'react'

export type FormInput = {
    ref: HTMLInputElement
    type: string;
    name: string;
    placeholder: string;
    autoComplete?: string;
    minLength?: number;
 };

export const Input = (props: FormInput | any) => {
    console.log(props)
    return (
        <>
        <label>{props.placeholder}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
               />
        </>
    )
}