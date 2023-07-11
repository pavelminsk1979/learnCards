import st from "./nameAndIcon.module.scss";
import UserIcon from "../../../assets/icons/userIcon.svg";

export const NameAndIcon = () => {
  return(
      <div className={st.nameAndIcon}>
          <div className={st.name}>Pavel</div>
          <img src={UserIcon} className={st.icon}/>
      </div>
  )
}