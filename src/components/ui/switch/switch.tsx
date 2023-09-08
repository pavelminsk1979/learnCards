import * as Switch from '@radix-ui/react-switch';
import st from './switch.module.scss';
type PropsType = {
    handlerOnChackedChange:(checked: boolean)=>void
}
export const SwitchComponent = ({handlerOnChackedChange}:PropsType) => {


    return (
        <div>
            <div>
                <div className={st.text}>
                    Dark mode Light
                </div>
                <Switch.Root onCheckedChange={handlerOnChackedChange} className={st.SwitchRoot}>
                    <Switch.Thumb className={st.SwitchThumb}/>
                </Switch.Root>
            </div>
        </div>
    )
};

