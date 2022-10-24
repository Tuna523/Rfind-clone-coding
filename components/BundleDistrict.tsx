import React, { useState } from "react";
import BundleDistrictSelect from "./BundleDistrictSelect";
import { optionsType } from "./StepNavigation";


const BundleDistrict:React.FC<{
    setDistrictValueHandler: (district:string) => void
    options: optionsType[]
}> = ({setDistrictValueHandler, options}) => {

    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div className="LocationSelectTemplate_district" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', flex: '0 0 0px'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start space-between', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', padding: '0px'}}>
                                <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">권역 선택</span>
                                <span className="font-large Text_basicText Text_color Text_primary Text_font Text_primary Text_bold"> *</span>
                            </div>
                            <div tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
                        </div>
                    </div>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', flex: '1 1 auto'}}>
                        <div className="BusinessDistrictSelect_component" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row nowrap', gap: '20px'}}>
                            <BundleDistrictSelect options={options} setDistrictValueHandler={setDistrictValueHandler}/>
{/*                             <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'A'} value={'서울도심(CBD)'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'B'} value={'여의도(YBD)'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'C'} value={'마포/공덕(MBD)'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'D'} value={'강남(GBD)'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'E'} value={'교대/서초/사당'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'F'} value={'잠실'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'G'} value={'상암(DMC)'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'H'} value={'성수'}/>
                            <BundleDistrictSelect setDistrictValueHandler={setDistrictValueHandler} id={'I'} value={'구디/가디'}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundleDistrict;