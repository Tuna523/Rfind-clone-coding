import React from "react";
import BundleStation from "./BundleStation";
import RadioSelectSubway from "./RadioSelectSubway";

const BundleSubway:React.FC<{
    setStationHandler: (stationValue: string) => void
    setValueHandler: (subway:string) => void
    station: string
}> = ({setStationHandler, setValueHandler, station}) => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div className="LocationSelectTemplate_subway" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', flex: '0 0 0px'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start space-between', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                                <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                                    <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">지하철 선택</span>
                                    <span className="font-large Text_basicText Text_color Text_font Text_primary Text_bold"> *</span>
                                </div>
                                <div tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
                            </div>
                        </div>
                        <RadioSelectSubway setStationHandler={setStationHandler} />
                    </div>
                </div>
                <div className="LocationSelectTemplate_marginTop LocationSelectTemplate_marginBottom" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    {
                        (station == '수도권') ? <BundleStation setValueHandler={setValueHandler} /> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default BundleSubway;