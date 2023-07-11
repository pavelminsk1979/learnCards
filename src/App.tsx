
import {Button} from "./components/ui/button";
import {Logout} from "./assets/icons/log-out.tsx";
import {Input} from "./components/ui/input/input.tsx";
import {useState} from "react";
import { MenuDropDown} from "./components/ui/dropDownMenu/dropDownMenu.tsx";
import {MyProfileIcon} from "./assets/icons/myProfileIcon.tsx";
import {LearnIcon} from "./assets/icons/learnIcon.tsx";
import {EditIcon} from "./assets/icons/editIcon.tsx";
import {DeleteIcon} from "./assets/icons/deleteIcon.tsx";
import UserIcon from "./assets/icons/userIcon.svg";
import {stateTabComponentType, TabComponent} from "./components/ui/tabComponent/tabComponent.tsx";


export function App() {
//Input
    const [valueInput, setValueInput] = useState('')
    const handlerSendInputValue = (valueInput:string) => {
      alert(valueInput)
    }




//DropDownMeny
    const functon1 = () => {
      alert('Есть реакция1')
    }
    const functon2 = () => {
        alert('Есть реакция2')
    }
    const functon3 = () => {
        alert('Есть реакция3')
    }
    const functon4 = () => {
        alert('Есть реакция4')
    }
    const functon5 = () => {
        alert('Есть реакция5')
    }

    const state1=[
        {id:1,icon:<MyProfileIcon width="22" height="22"/>,name:'My Profile',callback:functon1},
        {id:2,icon:<Logout width="20" height="20"/>,name:'Sing Out',callback:functon2}
    ]
    const state2=[
        {id:3,icon:<LearnIcon width="22" height="22"/>,name:'Learn',callback:functon3},
        {id:4,icon:<EditIcon width="20" height="20"/>,name:'Edit',callback:functon4},
        {id:5,icon:<DeleteIcon width="20" height="20"/>,name:'Delete',callback:functon5}
    ]
    const dataHeader = {icon:<img src={UserIcon}/>,name:'Павел',gmail:'p&pavel@gmail.com'}






    //TabComponent

const [active,setActive] = useState('My')

    const functionTabComponent1 = (name:string) => {
      /*alert('Реакция на TabComponent1')*/
        setActive(name)
    }
    const functionTabComponent2 = (name:string) => {
      /*  alert('Реакция на TabComponent2')*/
        setActive(name)
    }
    const functionTabComponent3 = (name:string) => {
        /*alert('Реакция на TabComponent3')*/
        setActive(name)
    }
    const stateTabComponent:stateTabComponentType[] = [
        {id:'tab1',name:'My',callback:functionTabComponent1,disabled:false},
        {id:'tab2',name:'All',callback:functionTabComponent2,disabled:false},
        {id:'tab3',name:'Трейтья',callback:functionTabComponent3,disabled:false}
    ]









    return <div>
        {/*Button*/}
        <div style={{display: 'flex', gap: '1rem', padding: '1rem'}}>
            <Button >
                Hello
            </Button>

            <Button variant={'secondary'}>
                Hello
            </Button>

            <Button variant={'tertiary'}>
                Hello
            </Button>

            <Button variant={'link'}>
                Hello
            </Button>

            <Button>
                <Logout width="23" height="23"/> Hello
            </Button>
        </div >





        {/*Input*/}
        <div style={{ padding: '1rem'}}>
            <div>
                <Input valueInput={valueInput}
                       setValueInput={setValueInput}
                       placeholder={'Input'}
                       label={'Input'}
                       type='email'/>
            </div>
            <div>
                <Input valueInput={valueInput}
                       setValueInput={setValueInput}
                       placeholder={'Input'}
                    label={'Input'}
                       type="password"
                      />
            </div>
            <div>
                <Input callback={handlerSendInputValue}
                    valueInput={valueInput}
                       setValueInput={setValueInput}
                    placeholder={'Input search'}
                    type='text'/>
            </div>

        </div>





       {/* MenuDropDown*/}
        <div style={{padding: '8rem'}}>
            <MenuDropDown data={state1} dataHeader={dataHeader}/>
            <MenuDropDown data={state2}/>
        </div>








       {/* TabComponent*/}
        <div style={{padding: '8rem'}}>
            <TabComponent active={active} data={stateTabComponent}/>
        </div>
    </div>
}
