import React from "react";

interface Locate{
    place:string
}

interface LocateList{
    places: Locate[]
}

const fromServerData = {
    places:[
        {
            place: '수도권'
        },
        {
            place: '부산'
        },
        {
            place: '대구'
        },
        {
            place: '광주'
        },
        {
            place: '대전'
        }
    ]
} as LocateList;

const RadioSelectSubway:React.FC<{
    setStationHandler: (stationValue: string) => void
}> = ({setStationHandler}) => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box', flex: '1 1 auto'}}>
            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap', gap: '20px'}}>
        {
                fromServerData.places.map((where, idx) => {
                    function handleOnClick() {
                        let button = document.getElementById('radio-SelectSubway-'+ where.place);
                        let icon = button?.children[0];
                        let checkedSvg = document.querySelectorAll('.SvgIcon_white')[1];
                        let checkedRadio = document.querySelectorAll('.Radio_checked')[1];
                        let buttonChild = button?.children[0];
                            checkedRadio?.classList.remove('Radio_checked');
                            checkedSvg?.classList.replace('SvgIcon_white', 'SvgIcon_basic');
                            buttonChild?.classList.add('Radio_checked');
                            icon?.classList.replace('SvgIcon_basic', 'SvgIcon_white');
                    }
                    return(
                        <div onClick={(e)=>{e.preventDefault(); handleOnClick(); setStationHandler(where.place);}} id={"radio-SelectSubway-"+ where.place} role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer'}} key={'place'+idx}>
                        <div className="Radio_component Radio_basic" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start center', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                            <span className="Text_basicText Text_color Text_inherit Text_font Text_primary Text_bold" style={{fontSize: '14px'}}>{where.place}</span>
                        </div>
                    </div>
                    )
                })
        }
            </div>
        </div>
    )
}

export default RadioSelectSubway;

/* const RadioSelectSubwayTest = () => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div className="LocationSelectTemplate_subway" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', flex: '0 0 0px'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
                                <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                                    <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">지하철 선택</span>
                                    <span className="font-large Text_basicText Text_color Text_primary Text_font Text_primary Text_bold"> *</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} */