import {ComponentPropsWithoutRef} from "react";
import st from './input.module.scss'
import InputSearch from '../../../../src/assets/icons/inputSearch.svg'
import IconEye from '../../../../src/assets/icons/IconOpenEye.svg'


type  PropsInputBaseType = {
    title?: string
    variant?: 'email' | 'password' | 'text'
    className?: string
    placeholder?: string
} & ComponentPropsWithoutRef<'input'>


export const Input = (props: PropsInputBaseType) => {
    const {variant = 'search', title, className, placeholder, ...rest} = props


    return (
        <div className={st.common}>
            {title && <div >{title}</div>}

            <div className={st.blockImputIcon}>

                {variant === 'text' && <img src={InputSearch}/>}

                <input className={`${st[variant]}  ${className} ${st.input}`}
                       placeholder={placeholder}
                       {...rest}/>

                {variant === 'password' && <img src={IconEye}/>}
            </div>

        </div>
    )
}

