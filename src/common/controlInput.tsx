import {Input, PropsInputBaseType} from "../components/ui/input/input.tsx";
import {Control, FieldPath, FieldValues, useController} from "react-hook-form";

type ProrsType <T extends FieldValues>= {
  control:Control<T>
  name:FieldPath<T>
}& Omit<PropsInputBaseType, 'onChange'|'value'>
export const ControlInput = <T extends FieldValues> ({control, name, ...rest}: ProrsType<T>) => {

    const {
        field: {value, onChange,
        },
        fieldState:{error}
    } = useController({
        name,
        control,
    })

    return (
        <Input
            error={error?.message}
            value={value}
            onChange={onChange}
            {...rest}/>
    )
}
















/*
import {Input} from "./ui/input/input.tsx";
import {Control, FieldPath, FieldValues, useController} from "react-hook-form";
import React from "react";

type ProrsType <T extends FieldValues>= {
  control:Control<T>
  name:FieldPath<T>
}& Omit<React.Component<typeof Input>, 'onChange'|'value'>
export const ControlInput = <T extends FieldValues> ({control, name, ...rest}: ProrsType<T>) => {
  const {
    field: {value, onChange},
  } = useController({
    name,
    control,
  })

  return (
      <Input
          value={value}
          onChange={onChange}
          {...rest}/>
  )
}*/
