import st from './tableDecks.module.scss'
import {EditIcon} from "../../../assets/icons/editIcon.tsx";
import {DeleteIcon} from "../../../assets/icons/deleteIcon.tsx";
import {PlayIcon} from "../../../assets/icons/playIcon.tsx";
import {ArrowUpIcon} from "../../../assets/icons/arrowUpIcon.tsx";
import {useState} from "react";
import {ArrowIconDown} from "../../../assets/icons/arrowIconDown.tsx";

type DataItemType = {
    title: string
    cardsCount: number
    updated: string
    createdBy: string
}
type DataHeaderType = {
    key: string
    title: string
}
type PropsType = {
    dataContentTable: DataItemType[]
    dataHeadersTable: DataHeaderType[]
}
type SortType = {
    key: string
    direction: 'asc' | 'desc'
} | null
export const TableDecks = ({dataContentTable, dataHeadersTable}: PropsType) => {
    const [sort, setSort] = useState<SortType>(null)
    console.log(sort?.key + 'Key')
    console.log(sort?.direction + 'Direction')
    const handlerSort = (key: string) => {
        if(key!=='action'){
            if (sort && sort.key === key) {
                setSort({
                    key: key,
                    direction: sort.direction === 'asc'
                        ? 'desc'
                        : 'asc'
                })
            } else {
                setSort({
                    key: key,
                    direction: 'asc'
                })
            }
        }
    }
    return (
        <table className={st.table}>
            <thead>
            <tr className={st.header}>
                {dataHeadersTable.map(el => (
                    <th key={el.key} className={st.thHeader} onClick={() => handlerSort(el.key)}>
                        {el.title}
                        {el.title && sort === null && <ArrowUpIcon/>}
                        {el.title && sort?.key === el.key && sort?.direction === 'asc' && <ArrowUpIcon/>}
                        {el.title && sort?.key === el.key && sort?.direction === 'desc' && <ArrowIconDown/>}
                        {el.title && sort && sort?.key !== el.key && <ArrowUpIcon/>}
                    </th>
                ))
                }
            </tr>
            </thead>
            <tbody>
            {dataContentTable.map(item => (
                <tr key={item.title} className={st.tr}>
                    <td className={st.tdCommonStyle}>{item.title}</td>
                    <td className={st.tdCommonStyle}>{item.cardsCount}</td>
                    <td className={st.tdCommonStyle}>{item.updated}</td>
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
