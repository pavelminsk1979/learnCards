
import {Input} from "../input/input.tsx";
import {useController, useForm} from "react-hook-form";
import {Button} from "../button/button.tsx";
import {CheckboxComponent} from "../checkbox/checkboxComponent.tsx";



export const SingUp = () => {

    const {register,handleSubmit, control}=useForm()

    const handlerOnSubmit: any = (data:any) => {
        console.log(data)
    }

    const {
        field: { value, onChange },
    } = useController({
        name: 'password',
        control,
        defaultValue: false,
    })

  return(
      <form  onSubmit={handleSubmit(handlerOnSubmit)}>
          <Input type={'email'}
                 label={'email'}
                 {...register('email')}/>


          <Input type={'password'}
                 label={'password'}
                 value={value } onChange={onChange}/>

          <CheckboxComponent value={value } onChange={onChange}/>

          <Button type={'submit'}>
              Sing Up
          </Button>
      </form>
  )
}





















