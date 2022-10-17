import React from "react";
import SelectedLocation from "./SelectedLocation";

const SelectedSubway:React.FC<{
    value: string[]
    removeValueHandler: (index:number) => void
}> = ({value, removeValueHandler}) => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <hr className="Divider_basicDivider Divider_grey Divider_size1px Divider_vertical Divider_solid"/>
            <div className="LocationSelectTemplate_selectedList" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', flex: '0 0 0px'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start space-between', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                                <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">선택된 지역</span>
                            </div>
                            <div tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
                        </div>
                    </div>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', flex: '1 1 auto'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap', gap: '20px'}}>
                                {value.map( (value,idx) => (
                                    <SelectedLocation value={ value } key={'value'+idx} removeValueHandler={removeValueHandler} index={idx}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedSubway;