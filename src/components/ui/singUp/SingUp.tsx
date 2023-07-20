
import { useForm} from "react-hook-form";
import {Button} from "../button/button.tsx";
import {ControlInput} from "../../../common/controlInput.tsx";
import {ControlCheckbox} from "../../../common/controlCheckbox.tsx";

type FormType = {
    email:string
    password:number
    rememberMe:boolean
}

export const SingUp = () => {

    const { handleSubmit, control} = useForm<FormType>()

    const handlerOnSubmit: any = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handlerOnSubmit)}>
            <ControlInput label={'email'}
                          type={'email'}
                          control={control}
                          name={'email'}/>

            <ControlInput label={'password'}
                               type={'password'}
                               control={control}
                               name={'password'}/>

            <ControlCheckbox  control={control}
                              name={'rememberMe'} />

            <Button type={'submit'}>
                Sing Up
            </Button>
        </form>
    )
}











/*

import { useForm} from "react-hook-form";
import {Button} from "../button/button.tsx";
import {ControlInput} from "../../controlInput.tsx";

type FormType = {
    email:string
    password:number
}

export const SingUp = () => {

    const { handleSubmit, control} = useForm<FormType>()

    const handlerOnSubmit: any = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handlerOnSubmit)}>
            <ControlInput label={'email'}
                          type={'email'}
                          control={control}
                          name={'email'}/>

            <ControlInput label={'password'}
                          type={'password'}
                          control={control}
                          name={'password'}/>

            <Button type={'submit'}>
                Sing Up
            </Button>
        </form>
    )
}*/








