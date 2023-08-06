import {Button} from "./components/ui/button";
import {Logout} from "./assets/icons/log-out.tsx";
import {Input} from "./components/ui/input/input.tsx";
import {useState} from "react";
import {MenuDropDown} from "./components/ui/dropDownMenu/dropDownMenu.tsx";
import {MyProfileIcon} from "./assets/icons/myProfileIcon.tsx";
import {LearnIcon} from "./assets/icons/learnIcon.tsx";
import {EditIcon} from "./assets/icons/editIcon.tsx";
import {DeleteIcon} from "./assets/icons/deleteIcon.tsx";
import UserIcon from "./assets/icons/userIcon.svg";
import {stateTabComponentType, TabComponent} from "./components/ui/tabComponent/tabComponent.tsx";
import {Header} from "./components/ui/aHeader/header.tsx";
import {NameAndIcon} from "./components/ui/nameAndIcon/nameAndIcon.tsx";
import {SliderComponent} from "./components/ui/slider/sliderComponent.tsx";
import {CheckboxComponent} from "./components/ui/checkbox/checkboxComponent.tsx";
import {ElementRadio, RadioGroupComponent} from "./components/ui/radioGroup/radioGroupComponent.tsx";
import {SelectComponent} from "./components/ui/select/selectComponent.tsx";
import {Pagination} from "./components/ui/paginator";
import {Typography} from "./components/ui/typography/typography.tsx";
import {Card} from "./components/ui/card/card.tsx";
import {Outlet,NavLink,useNavigate} from 'react-router-dom'

export function App() {

    //Header
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handlerOnClick = () => {
        setIsLoggedIn(true)
    }


//Input
    const [valueInput, setValueInput] = useState('')
    console.log(valueInput,'valueInput')
    const handlerSendInputValue = (valueInput: string) => {

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

    const state1 = [
        {id: 1, icon: <MyProfileIcon width="22" height="22"/>, name: 'My Profile', callback: functon1},
        {id: 2, icon: <Logout width="20" height="20"/>, name: 'Sing Out', callback: functon2}
    ]
    const state2 = [
        {id: 3, icon: <LearnIcon width="22" height="22"/>, name: 'Learn', callback: functon3},
        {id: 4, icon: <EditIcon width="20" height="20"/>, name: 'Edit', callback: functon4},
        {id: 5, icon: <DeleteIcon width="20" height="20"/>, name: 'Delete', callback: functon5}
    ]
    const dataHeader = {icon: <img src={UserIcon}/>, name: 'Павел', gmail: 'p&pavel@gmail.com'}


    //TabComponent

    const [active, setActive] = useState('My')

    const functionTabComponent1 = (name: string) => {
        /*alert('Реакция на TabComponent1')*/
        setActive(name)
    }
    const functionTabComponent2 = (name: string) => {
        /*  alert('Реакция на TabComponent2')*/
        setActive(name)
    }
    const functionTabComponent3 = (name: string) => {
        /*alert('Реакция на TabComponent3')*/
        setActive(name)
    }
    const stateTabComponent: stateTabComponentType[] = [
        {id: 'tab1', name: 'My', callback: functionTabComponent1, disabled: false},
        {id: 'tab2', name: 'All', callback: functionTabComponent2, disabled: false},
        {id: 'tab3', name: 'Трейтья', callback: functionTabComponent3, disabled: false}
    ]


    //Slider
    const startArrayValue = [2, 15]
    const sendValueFromSlice = (value: number[]) => {
        alert(`Вы поставили левый ползунок на ${value[0]}  а правый на ${value[1]}`)
    }


//checkbox
const checkboxText = 'Некоторый текст'
    const [valueCheckboxTrue,setValueCheckboxTrue] = useState(true)
/*    const [valueCheckboxFalse,setValueCheckboxFalse] = useState(false)*/

    const handlerOnChangeCheckbox = (value:boolean) => {
        setValueCheckboxTrue(value)
    }




    const [valueCheckboxFalse,setValueCheckboxFalse] = useState(false)
    const handlerOnChangeCheckbox1 = (value:boolean) => {
        setValueCheckboxFalse(value)
    }


    //RADIOGROUP
    const stateRadioGroup:ElementRadio[] = [
        {id:'1',text:'первый',name:'trainGroup',disabled:false},
        {id:'2',text:'второй',name:'trainGroup',disabled:false},
        {id:'3',text:'третий',name:'trainGroup',disabled:false},
        {id:'4',text:'четвертый',name:'trainGroup',disabled:false},
        {id:'5',text:'пятый',name:'trainGroup',disabled:false},
        {id:'6',text:'шестой',name:'trainGroup',disabled:false},
    ]
    const handlerCallbackRadioGroup = (/*value:string*/) => {
      /*alert(`Выбрана кнопка с айдишкой ${value}`)*/

    }

    //SELECT
    const stateSelectItems = [
        {value:'11',text:'Apple'},
        {value:'22',text:'Banana'},
        {value:'33',text:'AppleAndBanana'}
    ]
    let widthSelector= 200
    let headerSelector="ВыбратьЧтоТо"
    const handlerCallbackSelect = (value:string|undefined) => {
      alert(value?value:'underfined')
    }

    //PAGINATOR
    const handlerOnChange = () => {
     /* alert(pageNumber)*/
    }
    
    //ROUTER-DOM
    const navigate = useNavigate()
    const handlerLinkOnLogin = () => {
        navigate('/login')
    }


    return <div>
        <Header handlerOnClick={handlerOnClick}
                isLoggedIn={isLoggedIn}/>


        {/*Button*/}
        <div style={{display: 'flex', gap: '1rem', padding: '1rem'}}>
            <Button>
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
        </div>


        {/*Input*/}
        <div style={{padding: '1rem'}}>
            <div>
                <Input
                    callback={handlerSendInputValue}
                    valueInput={valueInput}
                       setValueInput={setValueInput}
                       placeholder={'Input'}
                       label={'Input'}
                       type='email'/>
            </div>
            <div>
                <Input callback={handlerSendInputValue}
                    valueInput={valueInput}
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
            <MenuDropDown
                data={state1}
                dataHeader={dataHeader}
                component={<NameAndIcon/>}/>
            <MenuDropDown data={state2}/>
        </div>


        {/* TabComponent*/}
        <div style={{padding: '8rem'}}>
            <TabComponent active={active} data={stateTabComponent}/>
        </div>


        {/* Slider*/}
        <div style={{padding: '15 rem'}}>
            <SliderComponent callback={sendValueFromSlice} startArrayValue={startArrayValue}/>
        </div>


        <div style={{display:'flex',padding: '8rem'}}>
            <CheckboxComponent
                disabled={false}
                checkboxText={checkboxText}
                onChange={handlerOnChangeCheckbox}
                value={valueCheckboxTrue}/>
            <CheckboxComponent
                disabled={false}
                checkboxText={checkboxText}
                onChange={handlerOnChangeCheckbox1}
                value={valueCheckboxFalse}/>
        </div>



        <div style={{padding: '8rem'}}>
            <RadioGroupComponent
                callback={handlerCallbackRadioGroup}
                stateRadioGroup={stateRadioGroup}/>
        </div>


        <div style={{padding: '8rem'}}>
            <SelectComponent
                callback={handlerCallbackSelect}
                headerSelector={headerSelector}
                widthSelector={widthSelector}
                stateSelectItems={stateSelectItems}/>
        </div>

        <div  style={{padding: '8rem'}}>
            <Pagination
                count={1000}
            page={1}
            onChange={handlerOnChange}/>
        </div>


        <div style={{padding: '3rem'}}>
            <NavLink to={'/'}>Нажми и перейди на App</NavLink>
            <NavLink to={'/login'}>Нажми и перейди на login</NavLink>
            <NavLink to={'/lo'}>Нажми и перейди на ОШИБКУ</NavLink>
            <button style={{color:'red'}} onClick={handlerLinkOnLogin}>Нажми и перейди на login</button>
            <Outlet />
        </div>

        <div style={{padding: '8rem'}}>
            <Typography as="h1" >маленькая потомучто если variant нет то будет variant='h3' </Typography>
            <Typography as="h2" >h2</Typography>
            <Typography as="h3" >h3</Typography>
            <Typography as="h1" variant="link1" >h1+large</Typography>
            <div>***********</div>
            <Typography variant="large" >large</Typography>
            <Typography variant="h1" >h1</Typography>
            <Typography variant="h2" >h2</Typography>
            <Typography variant="h3" >h3</Typography>
            <Typography variant="body1" >body1</Typography>
            <Typography variant="body2" >body2</Typography>
            <Typography variant="subtitle1" >subtitle1</Typography>
            <Typography variant="subtitle2" >subtitle2</Typography>
            <Typography variant="caption" >caption</Typography>
            <Typography variant="overline" >overline</Typography>
            <Typography as="a" href="https://images.google.com/" target="_blank"variant="overline" >Если хотите чтото найти в гугле то нажмите сюда</Typography>
            <div>
                <Typography as="a" href="https://steamcommunity.com/sharedfiles/filedetails/?id=720094248" target="_blank"variant="link2" >Сайт с всякой-разной запрещонкой</Typography>
            </div>

        </div>

        <div style={{padding: '3rem'}}>
            <Card>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </Card>
        </div>
    </div>
}
