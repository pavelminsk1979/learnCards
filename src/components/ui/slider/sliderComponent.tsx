
import * as Slider from '@radix-ui/react-slider';
import st from './sliderComponent.module.scss'
import {useState} from "react";

type PropsType={
    startArrayValue:number[]
    callback:(value:number[])=>void
}


 export  const SliderComponent = ({startArrayValue,callback}:PropsType) => {


     const [value,setValue] = useState(startArrayValue)
     const handlerOnValueChange = (event:number[]) => {
         setValue([event[0], event[1]])
     }

     const handlerSendValue = () => {
         callback(value)
     }

    return(
        <div className={st.common}>
            <div className={st.value}>
                {value[0]}
            </div>
            <Slider.Root
                onValueCommit={handlerSendValue}
                min={startArrayValue[0]}
                max={startArrayValue[1]}
                value={value}
                onValueChange={handlerOnValueChange}
                className={st.SliderRoot}>
                <Slider.Track className={st.SliderTrack}>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Thumb className={st.SliderThumb} />
                <Slider.Thumb className={st.SliderThumb} />
            </Slider.Root>
            <div className={st.value}>
                {value[1]}
            </div>
        </div>
    )
 }




/*

определяют два ползунка     defaultValue={[5,70,]}    и
две    <Slider.Thumb className={st.SliderThumb} />
<Slider.Thumb className={st.SliderThumb} />*/





/*
debugger сюда и подэбажить и видно какие значения передаются
const handlerOnValueChange = (event:number[]) => {
    debugger
    setValue([event[0], event[1]])
}*/
