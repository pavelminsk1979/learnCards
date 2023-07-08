import {ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, useState} from "react";
import st from './input.module.scss'
import InputSearch from '../../../../src/assets/icons/inputSearch.svg'
import IconEye from '../../../../src/assets/icons/IconOpenEye.svg'
import Close from '../../../assets/icons/close.svg'


type  PropsInputBaseType = {
    label?: string
    type?: 'email' | 'password' | 'text'
    className?: string
    error?: string
    callback?: (valueInput: string) => void
} & ComponentPropsWithoutRef<'input'>


export const Input = (props: PropsInputBaseType) => {
    const {
        type = 'text',
        label,
        className,
        error,
        callback,
        ...rest
    } = props

    const [valueInput, setValueInput] = useState('')

    const [openCloseValueInput, setOpenCloseValueInput] = useState(true)

    const handlerCreateValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        /*  if(type==='text'){
              setValueInput(event.currentTarget.value)
          }*/
        setValueInput(event.currentTarget.value)
    }
    const handlerOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (type === 'text') {
            if (event.key === 'Enter') {
                alert(valueInput)/* callback от сюда будет передавать  значение с инпута*/
                if (callback) {
                    callback(valueInput)
                }
            }
        }
    }
    const handlerOnClickIconClose = () => {
        setValueInput('')
    }
    const handlerIconEye = () => {
        setOpenCloseValueInput(!openCloseValueInput)
    }
    let typeValue = 'text'
    if (openCloseValueInput) {
        typeValue = 'password'
    }
    if (type === 'email') {
        typeValue = 'email'
    }
    if (type === 'text') {
        typeValue = 'text'
    }
    return (
        <>

            {label && <div className={st.label}>{label}</div>}

            <div className={error ? st.error : st.blockIconInput}>
                {type === 'text' && <img src={InputSearch}/>}

                <input className={`${st[type]}  ${className} ${error ? st.errorInput : st.input}`}
                       type={typeValue}
                       value={valueInput}
                       onChange={handlerCreateValueInput}
                       onKeyPress={handlerOnKeyPress}
                       {...rest}/>

                {type === 'text' && <img
                    onClick={handlerOnClickIconClose}
                    className={st.svgClose}
                    src={Close}/>}

                {type === 'password' && <img onClick={handlerIconEye} src={IconEye}/>}
            </div>
            {error && <div className={st.textError}>{error}</div>}
        </>
    )
}


/*
export const Input = (props: PropsInputBaseType) => {
    const {variant = 'search', label, className,error, placeholder, ...rest} = props


    return (
        <div>
            <div className={st.common}>
                {label && <div className={st.label}>{label}</div>}

                <div className={error?st.error:st.blockImputIcon}>

                    {variant === 'text' && <img src={InputSearch}/>}

                    <input className={`${st[variant]}  ${className} ${st.input}`}
                           placeholder={placeholder}
                           {...rest}/>

                    {variant === 'password' && <img src={IconEye}/>}
                </div>
            </div>
            {error&&<div className={st.textError}>{error}</div>}
        </div>
    )
}*/
