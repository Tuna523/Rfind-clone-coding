import React from "react";
import ViewMoreButton from "./ViewMoreButton";

interface Subway{
    color:string
    text:string
}

interface SubwayList{
   subways: Subway[];
}

const fromServerData = {
    subways:[
        {
            color:'#263c96',
            text:'1호선'
        },
        {
            color:'#3cb44a',
            text:'2호선'
        },
        {
            color:'#f06e00',
            text:'3호선'
        },
        {
            color:'#2c9ede',
            text:'4호선'
        },
        {
            color:'#8936e0',
            text:'5호선'
        },
        {
            color:'#b5500b',
            text:'6호선'
        },
        {
            color:'#697215',
            text:'7호선'
        },
        {
            color:'#e51e6e',
            text:'8호선'
        },
        {
            color:'#d1a62c',
            text:'9호선'
        },
        {
            color:'#6f99d0',
            text:'인천1호선'
        },
        {
            color:'#f4ab3e',
            text:'인천2호선'
        },
        {
            color:'#eba900',
            text:'수인분당선'
        },
        {
            color:'#96710a',
            text:'김포골드'
        },
        {
            color:'#7cc4a5',
            text:'경의중앙선'
        },
        {
            color:'#73b6e4',
            text:'공항철도'
        },
        {
            color:'#08af7b',
            text:'경춘선'
        },
        {
            color:'#a71e31',
            text:'신분당선'
        },
        {
            color:'#8bc53f',
            text:'서해선'
        },
        {
            color:'#c6c100',
            text:'우이신설선'
        },
        {
            color:'#4e67a5',
            text:'신림선'
        },
        {
            color:'#ff9d27',
            text:'의정부'
        },
        {
            color:'#77c371',
            text:'에버라인'
        },
        {
            color:'#2673f2',
            text:'경강선'
        }
    ]
} as SubwayList
const LocationSubway:React.FC<{
    setStationValueHandler: (subway:string) => void
}> = ({setStationValueHandler}) => {
    return (
    <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', flex: '1 1 auto'}}>
        <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%'}}>
            <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', height: '100%', minHeight: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap'}}>
            {
                fromServerData.subways.map((subway, idx)=>{
                    return <div onClick={(e)=> {e.preventDefault(); setStationValueHandler(subway.text); console.log(idx)}} className="SubwayLineSelect_button" id={"subwayLine_"+ subway.text} role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}} key={'sub'+idx}>
                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display:' flex', flexFlow: 'row nowrap', gap: '10px'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: subway.color}}>
                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                            </div>
                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">{subway.text}</span>
                    </div>
                </div>
                })
            }
            </div>
        </div>
    </div>
    )
}

export default LocationSubway;