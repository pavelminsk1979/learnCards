import * as Tabs from '@radix-ui/react-tabs';
import st from './tabComponent.module.scss'

export type stateTabComponentType={
    id:string
    name:string
    callback:(name:string)=>void
    disabled:boolean
}

type PropsType = {
    data:stateTabComponentType[]
    active:string
}

export const TabComponent = ({data,active}:PropsType) => {


    return (
        <Tabs.Root /*className={st.a} defaultValue={data[0].id}*/>
            <Tabs.List >
                {
                    data.map((e:stateTabComponentType)=>{
                        return(
                            <Tabs.Trigger
                                disabled={e.disabled}
                                onClick={()=>e.callback(e.name)}
                                key={e.id}
                                className={active===e.name?st.active:st.tabTrigger}
                                value={e.id}>
                                {e.name}
                            </Tabs.Trigger>
                        )
                    })
                }
                {/*  <Tabs.Trigger className={st.tabTrigger} value="tab1">
                Account
            </Tabs.Trigger>
            <Tabs.Trigger  value="tab2">
                Password
            </Tabs.Trigger>*/}
            </Tabs.List>
        </Tabs.Root>
    )
}



