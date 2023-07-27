import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import st from './typography.module.scss'

type PropsType <T extends ElementType = 'p'>= {
    as?:T
    variant?:'large'|'h1'|'h2'|'h3'|'body1'|'body2'|'subtitle1'|'subtitle2'|'caption'|'overline'|'link1'|'link2'
    children?: ReactNode
    className?: string
}& ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'> (props:PropsType<T>) => {

    const {variant='h3',children,className, as:Component = 'p', ...restProps}=props

    return (
        <Component className = {`${st[variant]} ${className}`} {...restProps}>
            {children}
        </Component>
    )
}