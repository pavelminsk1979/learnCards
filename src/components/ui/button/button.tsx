
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

    return (
        <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    )
}



export type InputProps= ComponentPropsWithoutRef<'input'>

export const Input = ()=>{}
















/*
import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
    as: any
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
                           variant = 'primary',
                           fullWidth,
                           className,
                           as: Component = 'button',
                           ...rest
                       }: ButtonProps) => {
    return (
        <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    )
}
*/











/*
import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'


export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
    className:string
} & ComponentPropsWithoutRef<'button'>




export const Button = ({ variant = 'primary', fullWidth, className, ...rest }: ButtonProps) => {
    return (
        <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className??''}`} {...rest} />
    )
}*/
