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
}

export const SelectComponent = ({widthSelector, stateSelectItems}: PropsType) => {


    return (

        <Select.Root>
            <Select.Trigger
                style={{width: widthSelector}}
                className={st.selectTrigger}>

                <Select.Value className={st.title}
                              placeholder="ВыбратьЧтоТо"/>

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






