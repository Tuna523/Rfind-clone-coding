import React, { useState } from "react";
import { optionsType } from "./StepNavigation";


const BundleDistrictSelect:React.FC<{
    options: optionsType[]
    show?: boolean
    setDistrictValueHandler: (distrcit:string) => void
}> = ({options, show = true, setDistrictValueHandler}) => {
    
    return(
        <>
        {
            options.map((options,index)=>{
                function onClickOptions() {
                    options.show = !show
                }
                return <div onClick={(e)=>(onClickOptions(), setDistrictValueHandler(options.name))} id={'BusinessDistrictSelect_' + options.id} role="button" style={{display:options.show?'':'none', boxSizing: 'border-box', cursor: 'pointer'}} key={index}>
                    <div className="font-normal Chip_component Chip_medium Chip_grey Chip_canHover" id={options.name} tabIndex={-1} style={{boxSizing: 'border-box'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                            <span className="Text_basicText Text_color Text_inherit Text_font Text_primary" style={{fontSize: '14px'}}>{options.name}</span>
                        </div>
                    </div>
                </div>
            })
        }
        </>
/*         <div onClick={(e)=>{setDistrictValueHandler(options);}} id={"BusinessDistrictSelect_"+ id} role={'button'} tabIndex={0} style={{display:show?'':'none', boxSizing: 'border-box', cursor: 'pointer'}}>
            <div className="font-normal Chip_component Chip_medium Chip_grey Chip_canHover" id={value} tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                    <span className="Text_basicText Text_color Text_inherit Text_font Text_primary" style={{fontSize: '14px'}}>{value}</span>
                </div>
            </div>
        </div> */
    )
}

export default BundleDistrictSelect;