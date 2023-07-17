
import { useCallback, useMemo } from 'react'

// original code: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

const range = (start: number, end: number) => {
    let length = end - start + 1

    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParamType = {
    count: number
    siblings?: number
    page: number
    onChange: (pageNumber: number) => void
}

type PaginationRange = (number | '...')[]

export const usePagination = ({ count, siblings = 1, page, onChange }: UsePaginationParamType) => {
    const paginationRange = useMemo(() => {
        // Pages count is determined as siblingCount + firstPage + lastPage + page + 2*DOTS
        const totalPageNumbers = siblings + 5

        /*
          Case 1:
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= count) {
            return range(1, count)
        }

        /*
            Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
        */
        const leftSiblingIndex = Math.max(page - siblings, 1)
        const rightSiblingIndex = Math.min(page + siblings, count)

        /*
          We do not show dots when there is only one page number to be inserted
          between the extremes of siblings and the page limits i.e 1 and totalPageCount.
          Hence, we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
        */
        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < count - 2

        const firstPageIndex = 1
        const lastPageIndex = count

        /*
            Case 2: No left dots to show, but rights dots to be shown
        */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblings
            let leftRange = range(1, leftItemCount)

            return [...leftRange, DOTS, count]
        }

        /*
            Case 3: No right dots to show, but left dots to be shown
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblings
            let rightRange = range(count - rightItemCount + 1, count)

            return [firstPageIndex, DOTS, ...rightRange]
        }

        /*
            Case 4: Both left and right dots to be shown
        */
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex)

            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }
    }, [siblings, page, count]) as PaginationRange

    const lastPage = paginationRange.at(-1)

    const isFirstPage = page === 1
    const isLastPage = page === lastPage

    const handleNextPageClicked = useCallback(() => {
        onChange(page + 1)
    }, [page, onChange])

    const handlePreviousPageClicked = useCallback(() => {
        onChange(page - 1)
    }, [page, onChange])

    function handleMainPageClicked(pageNumber: number) {
        return () => onChange(pageNumber)
    }

    return {
        paginationRange,
        isFirstPage,
        isLastPage,
        handleMainPageClicked,
        handleNextPageClicked,
        handlePreviousPageClicked,
    }
}


























/*import st from './pagination.module.scss'
import {useState} from "react";
import {ArrowLeftPaginator} from "../../../assets/icons/arrowLeftPaginator.tsx";
import {ArrowRightPaginator} from "../../../assets/icons/arrowRightPaginator.tsx";
import {SelectComponent} from "../select/selectComponent.tsx";

type PropsType = {
    allElements: number
}
export const Paginator = ({allElements}: PropsType) => {

    const stateSelectItems = [
        {value:'1',text:'5'},
        {value:'2',text:'8'},
        {value:'3',text:'10'},
        {value:'4',text:'12'},
        {value:'5',text:'15'}
    ]
    let widthSelector= 80
    let headerSelector="10"

const [amountElementsInOnePage,setAmountElementsInOnePage] = useState(10)
    const handlerCallbackSelect = (amountElementsInOnePage = '10') => {
        setAmountElementsInOnePage(Number(amountElementsInOnePage))

        /!*сделать запрос на сервер чтоб возвращал данное количество элементов и они будут отрисованы на одной странице *!/
    }

    let amountPages = Math.ceil(allElements / amountElementsInOnePage)
   let maxPart = amountPages/10

    let arrayNumbers = []
    for (let i = 1; i <= amountPages; i++) {
        arrayNumbers.push(i)
    }

    const onClickHandler = (numberPage: any) => {
        numberPage /!*на сервер отправится запрос ЗА ЭЛЕМЕНТАМИ с страницы данного номера*!/
    }


    const [part, setPart] = useState(1)
    const sizeOnePart = 10     /!* размер одной части кнопок*!/
    const numberStartPart = (part - 1) * sizeOnePart + 1
    const numberFinishPart = part * sizeOnePart


    const fetchActivePageHandler = (numberPage: number) => {
        numberPage

    }

    const onClickReturnPart = () => {
        if (part !== 1) {
            setPart(part - 1)
            fetchActivePageHandler((part - 1) * sizeOnePart)
        }
    }


    const onClickNextPart = () => {
        if(part<maxPart)
        setPart(part + 1)
        fetchActivePageHandler((part) * sizeOnePart + 1)
    }


    return (
        <div className={st.common}>
            <div
                className={st.arrow}
                onClick={onClickReturnPart}>
                <ArrowLeftPaginator width="28" height="28"/>
            </div>

            {
                arrayNumbers.filter(el => el >= numberStartPart && el <= numberFinishPart).map(el => {
                    return (
                        <span key={el}
                              onClick={() => onClickHandler(el)}
                              className={false
                                  ? st.activeNumber
                                  : st.number
                              }>{el}</span>
                    )
                })
            }

            <div
                className={st.arrow}
                onClick={onClickNextPart}>
                <ArrowRightPaginator width="28" height="28"/>
            </div>

            <div className={st.blockSeleckWithWords}>
                Показать
                <SelectComponent
                    callback={handlerCallbackSelect}
                    headerSelector={headerSelector}
                    widthSelector={widthSelector}
                    stateSelectItems={stateSelectItems}/>
                на странице
            </div>
        </div>
    )
}*/


/*

import st from './pagination.module.scss'
import {useState} from "react";

type PropsType = {
    allElements:number
    /!*   numberPageWithServer: number
       countItemsForOnePage: number
       countWithServerItems: number
       idCurrentPack?: string*!/
}
export const Paginator = ({allElements}: PropsType) => {


    let amountPages = Math.ceil(allElements / 10)
    /!* количество страниц   *!/


    let arrayNumbers = []  /!*чтобы отрисовать кнопки---их надо в масив поместить- каждая кнопка покажет группу из 10 элементов*!/
    for (let i = 1; i <= amountPages; i++) {
        arrayNumbers.push(i)
    }

    const onClickHandler = (el:any) => {
        el  /!*Тут запрос на сервер за ГРУППОЙ ЭЛЕМЕНТОВ на номер которой нажал ... и плюс  можно запросить-СКОЛЬКО В ОДНОЙ ГРУППЕ БУДЕТ*!/
    }



    {/!* чтоб не было всех кнопок *!/}
    const sizeOnePart = 10 /!* размер одной части кнопок*!/
    {/!* чтоб не было всех кнопок *!/}
    const [part, setPart] = useState(1)

    const numberStartPart = (part - 1) * sizeOnePart + 1
    const numberFinishPart = part * sizeOnePart
    /!*    у порции есть первое число с которой порция начинается
    и последнее число которым порция заканчивается*!/

    const fetchActivePageHandler = (numberPage: number) => {
        numberPage  /!* это номер страницы и ДЕЛАЕТСЯ ЗАПРОС НА СЕРВЕР за ней .....когда на стрелку нажал то пошел запрос за следующими страницами *!/

    }

    {/!* чтоб не было всех кнопок *!/}
    const onClickReturnPart = () => {
        if(part!==1){
            setPart(part - 1)
            fetchActivePageHandler((part - 1) * sizeOnePart)
        }
    }

    {/!* чтоб не было всех кнопок  ...когда на стрелку нажал то
    вычисляется страница---добавляется плюс ОДНА*!/}
    const onClickNextPart = () => {
        setPart(part + 1)
        fetchActivePageHandler((part) * sizeOnePart + 1)
    }


    return (
        <div>
            {/!* чтоб не было всех кнопок *!/}
            <div onClick={onClickReturnPart}> %%% </div>

            {
                arrayNumbers.filter(el => el >= numberStartPart && el <= numberFinishPart).map(el => {
                    return (
                        <span key={el}
                              onClick={() => onClickHandler(el)}
                              className={false
                                  ? st.activeNumber
                                  : st.number
                              }>{el}</span>
                        /!* Для выделения кнопки той станицы на которой нахожусь
                         условие будет такое ----page===el---если с сервера приходящий номер
                         станицы равен  текущей цифре тогда стиль добавить*!/
                    )
                })
            }
            {/!* чтоб не было всех кнопок *!/}
            <div onClick={onClickNextPart}>@@@</div>

        </div>
    )
}*/
