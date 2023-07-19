
import {Input} from "../input/input.tsx";
import { useForm} from "react-hook-form";
import {Button} from "../button/button.tsx";


/*type InputsType = {
    email: string
    password: number
}*/
export const SingUp = () => {

    const {register,handleSubmit}=useForm()

    const handlerOnSubmit: any = (data:any) => {
        console.log(data)
    }

  return(
      <form  onSubmit={handleSubmit(handlerOnSubmit)}>
          <Input type={'email'}  label={'email'} {...register('email')}/>


          <Input type={'password'} label={'password'} {...register('password')}/>




          <Button type={'submit'}>
              Sing Up
          </Button>
      </form>
  )
}





















