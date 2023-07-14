import st from './selectComponent.module.scss'
import {ArrowDownIcon} from "../../../assets/icons/arrowDownIcon.tsx";
import {useState} from "react";

export const SelectComponent = () => {

    const elementArray = [
        {id: '1', text: 'Some text'},
        {id: '2', text: 'некоторый текст'}
    ]

    const [textSelect, setTextSelect] = useState('ВыбратьЧтоТо')

    const [selectOpen, setSelectOpen] = useState(false)


    const handlerOnClickElementArray = (text: string) => {
        setTextSelect(text)
        setSelectOpen(false)
    }

    const handlerOnClick = () => {
        setSelectOpen(!selectOpen)
    }

    return (
        selectOpen
            ? <div className={st.commonSelectOpen}>
                <div>
                    <div className={st.header}>
                        Select-box
                    </div>

                    <div onClick={handlerOnClick}
                         className={st.titleFrame}>
                        <div className={st.text}>ВыбратьЧтоТо</div>
                        <div className={st.arrowDownIcon}>
                            <ArrowDownIcon width="25" height="25"/></div>
                    </div>
                </div>
                {
                    elementArray.map((e) => {
                        return (
                            <div
                                onClick={() => handlerOnClickElementArray(e.text)}
                                className={st.textElementArray}
                                key={e.id}>
                                {e.text}
                            </div>
                        )
                    })
                }
            </div>


            : <div className={st.common}>
                <div className={st.header}>
                    Select-box
                </div>

                <div onClick={handlerOnClick}
                     className={st.titleFrame}>
                    <div className={st.text}>
                        {textSelect}</div>
                    <div className={st.arrowDownIcon}>
                        <ArrowDownIcon width="25" height="25"/></div>
                </div>
            </div>
    )
}


/*
import * as Select from '@radix-ui/react-select';
import {  ChevronDownIcon  } from '@radix-ui/react-icons';
import st from './selectComponent.module.scss'



export const SelectComponent = () => {
    return(
        <div className={st.common}>
            <div className={st.title}>
               Select-box
            </div>
            <Select.Root >


                <Select.Trigger
                    className={st.selectTrigger}>

                    <Select.Value className={st.value}
                        placeholder="ВыбратьЧтоТо" />

                    <Select.Icon >
                        <ChevronDownIcon />
                    </Select.Icon>

                </Select.Trigger>



                <Select.Portal className={st.portal}>
                    <Select.Content className={st.selectContent}  >
                        <Select.Viewport >
                            <Select.Group>
                                {/!*<Select.Label>ЗАГОЛОВОК</Select.Label>*!/}

                                <Select.Item value={'1'} >
                                    <Select.ItemText>Apple</Select.ItemText>
                                </Select.Item>


                                <Select.Item value={'2'}>
                                    <Select.ItemText>Banana</Select.ItemText>
                                </Select.Item>

                            </Select.Group>

                        </Select.Viewport>

                    </Select.Content>
                </Select.Portal>

            </Select.Root>
        </div>
    )
}*/






