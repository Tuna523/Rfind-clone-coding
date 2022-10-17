import React from "react";
import ViewMoreButton from "./ViewMoreButton";

interface Subway{
    color:string
    text:string
}

interface SubwayList{
   subways: Subway[]
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
    setValueHandler: (subway:string) => void
}> = ({setValueHandler}) => {
    return (
    <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', flex: '1 1 auto'}}>
        <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%'}}>
            <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', height: '100%', minHeight: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap'}}>
            {
                fromServerData.subways.map((subway, idx)=>{
                    return <div onClick={(e)=> {e.preventDefault(); setValueHandler(subway.text)}} className="SubwayLineSelect_button" id={"subwayLine_"+ subway.text} role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}} key={'sub'+idx}>
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

/* const LocationSubwayTest = () => {
    return(
                <div className="LocationSelectTemplate_marginTop LocationSelectTemplate_marginBottom" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', height: '100%', minHeight: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', width: '100%', flex: '0 0 0px'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start space-between', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                                <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                                    <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">노선 선택</span>
                                    <span className="font-large Text_basicText Text_color Text_primary Text_font Text_primary Text_bold"> *</span>
                                </div>
                                <div tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
                            </div>
                        </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_1호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(38, 60, 150)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">1호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_2호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(60, 180, 74)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">2호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_3호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(240, 110, 0)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">3호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_4호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(44, 158, 222'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">4호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_5호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(137, 54, 224)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">5호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_6호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(181, 80, 11)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">6호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_7호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(105, 114, 21)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">7호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_8호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(229, 30, 110)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">8호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_9호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                    <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(209, 116, 44)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">9호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_인천1호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(111, 153, 208)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">인천1호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_인천2호선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(244, 171, 62)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">인천2호선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_수인분당선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(235, 169, 0)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">수인분당선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_김포골드" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(150, 113, 10)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">김포골드</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_경의중앙선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(124, 196, 165)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">경의중앙선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_공항철도" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(115, 182, 228)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">공항철도</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_경춘선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(8, 175, 123)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">경춘선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_신분당선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(167, 30, 49)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">신분당선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_서해선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(139, 197, 63)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">서해선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_우이신설선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(198, 193, 0)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">우이신설선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_신림선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(78, 103, 165)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">신림선</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_의정부" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(255, 157, 39)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">의정부</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_에버라인" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(119, 195, 113)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">에버라인</span>
                                        </div>
                                    </div>
                                    <div className="SubwayLineSelect_button" id="subwayLine_경강선" role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer', width: '120px'}}>
                                        <div className="SubwayText_subway" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                                            <div tabIndex={-1} style={{boxSizing: 'border-box', color: 'rgb(38, 115, 242)'}}>
                                                <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">●</span>
                                            </div>
                                            <span className="font-normal Text_basicText Text_color Text_inherit Text_font Text_primary">경강선</span>
                                        </div>
                                    </div>
                                </div>
                                <ViewMoreButton/>
                            </div>
    )
} */

