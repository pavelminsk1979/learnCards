import * as Select from '@radix-ui/react-select';
import {ChevronDownIcon} from '@radix-ui/react-icons';
import st from './selectComponent.module.scss'


export type ItemType = {
    value: string
    text: string
}

type PropsType = {
    widthSelector?: number
    stateSelectItems:ItemType[]
    headerSelector:string
    callback:(value:string|undefined)=>void
}

export const SelectComponent = ({widthSelector, stateSelectItems,headerSelector,callback}: PropsType) => {

    const handlerOnValueChange = (event:string) => {
      let res = stateSelectItems.find(e=>e.value===event)
        callback (res?.text)
    }


    return (

        <Select.Root onValueChange={handlerOnValueChange}>
            <Select.Trigger
                style={{width: widthSelector}}
                className={st.selectTrigger}>

                <Select.Value className={st.title}
                              placeholder={headerSelector}/>

                <Select.Icon>
                    <ChevronDownIcon/>
                </Select.Icon>

            </Select.Trigger>


            <Select.Portal>
                <Select.Content
                    style={{width: widthSelector}}
                    className={st.selectContent}
                    position='popper' /* - список строго под заголовком*/  >
                    <Select.Viewport>
                        <Select.Group>
                            {
                                stateSelectItems.map((e) => {
                                    return (
                                        <Select.Item
                                            key={e.value}
                                            className={st.item}
                                            value={e.value}>

                                            <Select.ItemText
                                                className={st.itemText}>
                                                {e.text}
                                            </Select.ItemText>

                                        </Select.Item>
                                    )
                                })
                            }

                        </Select.Group>

                    </Select.Viewport>

                </Select.Content>
            </Select.Portal>

        </Select.Root>
    )
}






