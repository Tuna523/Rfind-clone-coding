import React, { useEffect, useState } from "react";
import BundleLegalDongSelect from "./BundleLegalDongSelect";
import NewTree from "./NewTree";
import TreeView from "./TreeView";

var index = 0;
const BundleLegalDong:React.FC<{
    setLegalDongHandler: (legalDong:string) => void
}> = ({setLegalDongHandler}) => {
    const [menuIndex, setMenuIndex] = useState(0);
    const [menuIndex2, setMenuIndex2] = useState(0);
    const [dongName, setDongName] = useState('시/도');
    const [dongName2, setDongName2] = useState('시/군/구')

    function changeDongName(name:string) {
        setDongName(name);
    }

    function changeDongName2(name:string) {
        setDongName2(name);
    }

    function changeMenuValue(index:number) {
        setMenuIndex(index);
    }
    function changeMenuValue2(index:number) {
        setMenuIndex2(index);
    }

    // useEffect(() => {
    //     console.log(menuIndex);
    //     console.log(menuIndex2);
    // }, [menuIndex, menuIndex2]);

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
                            <BundleLegalDongSelect value={dongName} setLegalDongHandler={setLegalDongHandler} id={'Dong1'} number={1} changeMenuValue={changeMenuValue} menuIndex={menuIndex} changeMenuValue2={changeMenuValue2} menuIndex2={menuIndex2} setDongName={setDongName} setDongName2={setDongName2}/>
                            <BundleLegalDongSelect value={dongName2} setLegalDongHandler={setLegalDongHandler} id={'Dong2'} invisible={'invisible'} number={2} changeMenuValue={changeMenuValue} menuIndex={menuIndex} changeMenuValue2={changeMenuValue2} menuIndex2={menuIndex2} setDongName={setDongName} setDongName2={setDongName2}/>
                            <BundleLegalDongSelect value={"읍/면/동/+리"} setLegalDongHandler={setLegalDongHandler} id={'Dong3'} invisible={'invisible'} number={3} changeMenuValue={changeMenuValue} menuIndex={menuIndex} menuIndex2={menuIndex2} changeMenuValue2={changeMenuValue2} setDongName={setDongName} setDongName2={setDongName2}/>

                        </div>
                        {/* <TreeView/> */}
                        <NewTree />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundleLegalDong;