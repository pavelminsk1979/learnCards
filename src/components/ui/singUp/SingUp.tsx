
import { useForm} from "react-hook-form";
import {Button} from "../button/button.tsx";
import {ControlInput} from "../../../common/controlInput.tsx";
import {ControlCheckbox} from "../../../common/controlCheckbox.tsx";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "../card/card.tsx";
import st from './SingUp.module.scss'

const schema = z.object({
    email: z.string().trim().email('Invalid email adress').nonempty('Enter email'),
    password: z.string().trim().nonempty('Enter password').min(8,'Password must be more than 8 characters'),
    rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>

export const SingUp = () => {

    const { handleSubmit, control,
   } = useForm<FormType>({
        resolver:zodResolver(schema),
        mode:'onSubmit'
    })


    const handlerOnSubmit: any = (data: any) => {
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(handlerOnSubmit)}>
            <Card className={st.common}>
            <ControlInput label={'email'}
                          type={'email'}
                          control={control}
                          name={'email'}/>

            <ControlInput label={'password'}
                               type={'password'}
                               control={control}
                               name={'password'}/>

            <ControlCheckbox  checkboxText={'Remember me'}
                control={control}
                              name={'rememberMe'} />

            <Button type={'submit'}>
                Sing Up
            </Button>
            </Card>
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








