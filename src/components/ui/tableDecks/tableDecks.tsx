import st from './tableDecks.module.scss'
import {EditIcon} from "../../../assets/icons/editIcon.tsx";
import {DeleteIcon} from "../../../assets/icons/deleteIcon.tsx";
import {PlayIcon} from "../../../assets/icons/playIcon.tsx";

type DataItemType={
  title: string
  cardsCount: number
  updated: string
  createdBy:string
}
type PropsType = {
  data:DataItemType[]
}
export const TableDecks = ({data}:PropsType) => {
  return(
      <table className={st.table}  >
        <thead>
        <tr className={st.header}>
          <th className={st.thHeader}>Name</th>
          <th className={st.thHeader}>Cards</th>
          <th className={st.thHeader}>Last Updated</th>
          <th className={st.thHeader}>Created by</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {data.map(item => (
            <tr key={item.title} className={st.tr}>
              <td className={st.tdCommonStyle }>{item.title}</td>
              <td className={st.tdCommonStyle }>{item.cardsCount}</td>
              <td className={st.tdCommonStyle }>{item.updated}</td>
              <td className={st.tdCreatedBy}>{item.createdBy}</td>
              <td className={st.tdIcons}>
                  <PlayIcon/>
                  <EditIcon/>
                  <DeleteIcon/>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
  )
}