import * as Checkbox from '@radix-ui/react-checkbox';
import {CheckIcon} from '@radix-ui/react-icons';
import st from './checkboxComponent.module.scss'

type PropsType = {
    checkboxText: string
    value: boolean
    callback: (value: boolean) => void
    disabled:boolean
}

export const CheckboxComponent = ({value, callback, checkboxText,disabled}: PropsType) => {

    const handlerOnCheckedChange = (value: boolean) => {
        callback(value)
    }

    return (
        <div className={st.common}>

            <div className={st.blockUnderCheckbox}>

                    <Checkbox.Root
                        disabled={disabled}
                        onCheckedChange={handlerOnCheckedChange}
                        checked={value}
                        className={value ? st.checkboxTrue : st.checkboxFalse}>

                        <Checkbox.Indicator className={st.checkboxIndicator}>
                            <CheckIcon/>
                        </Checkbox.Indicator>

                    </Checkbox.Root>

                </div>

            <div>
                {checkboxText}
            </div>

        </div>
    )
}







