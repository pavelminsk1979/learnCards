import st from './header.module.scss'
import {IncubatorIcon} from "../../../assets/icons/incubatorIcon.tsx";
import {Button} from "../button";
import UserIcon from "../../../assets/icons/userIcon.svg";

type PropsType = {
    isLoggedIn: boolean
    handlerOnClick: () => void
}
export const Header = ({isLoggedIn, handlerOnClick}: PropsType) => {


    return (
        <div className={st.common}>

            <div className={st.block}>
                <div>
                    <div><IncubatorIcon
                        width="200"
                        height="50"/></div>
                </div>


                { isLoggedIn

                    ? <div className={st.nameAndIcon}>
                        <div className={st.name}>Pavel</div>
                        <img src={UserIcon} className={st.icon}/>
                    </div>

                    : <Button onClick={handlerOnClick}>
                        Sing in
                    </Button>
                }
            </div>
        </div>
    )
}