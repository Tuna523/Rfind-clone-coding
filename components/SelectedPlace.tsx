import React from "react";
import SelectedLocation from "./SelectedLocation";
import { optionsType } from "./StepNavigation";

const SelectedPlace:React.FC<{
    options: optionsType[]
    value: string[]
    removeValueHandler: (index:number) => void
}> = ({options, value, removeValueHandler}) => {
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
                                <SelectedLocation value={value} removeValueHandler={removeValueHandler} options={options}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedPlace;