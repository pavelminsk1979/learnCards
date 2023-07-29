
import st from './card.module.scss'
import {ComponentPropsWithoutRef, ReactNode} from "react";

type PropsType = {
    children? : ReactNode
}  & ComponentPropsWithoutRef<'div'>
export const Card = ({children,className,
                         ...restProps}:PropsType) => {
  return(
      <div className={`${st.frame} ${className}`} {...restProps}>
          {children}
      </div>
  )
}