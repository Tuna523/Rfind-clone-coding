import React from "react";
import BundleLegalDongSelect from "./BundleLegalDongSelect";

const BundleLegalDong:React.FC<{
    setLegalDongHandler: (legalDong:string) => void
}> = ({setLegalDongHandler}) => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div className="LocationSelectTemplate_legal" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px', flex: '0 0 0px'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start space-between', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', padding: '0px'}}>
                                <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">법정동 선택</span>
                                <span className="font-large Text_basicText Text_color Text_primary Text_font Text_primary Text_bold"> *</span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', flex: '1 1 auto'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap', gap: '20px'}}>
                            <BundleLegalDongSelect value={"시/도"} setLegalDongHandler={setLegalDongHandler} />
                            <BundleLegalDongSelect value={"시/군/구"} setLegalDongHandler={setLegalDongHandler} />
                            <BundleLegalDongSelect value={"읍/면/동/+리"} setLegalDongHandler={setLegalDongHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundleLegalDong;