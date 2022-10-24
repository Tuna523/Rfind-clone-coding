import React from "react";
import LocationSubway from "./LocationSubway";

const BundleStation:React.FC<{
    setStationValueHandler: (subway:string) => void
}> = ({setStationValueHandler}) => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', height: '100%', minHeight: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
            <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', width: '100%', flex: '0 0 0px'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start space-between', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                        <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">노선 선택</span>
                        <span className="font-large Text_basicText Text_color Text_primary Text_font Text_primary Text_bold"> *</span>
                    </div>
                    <div tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
                </div>
            </div>
            <LocationSubway setStationValueHandler={setStationValueHandler}/>
        </div>
    )
}

export default BundleStation;