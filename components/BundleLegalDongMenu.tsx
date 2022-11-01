import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import BundleLegalDongMenuList from "./BundleLegalDongMenuList";

interface Dong{
    place: string;
    place2: string;
    place3: string;
}

interface DongList{
    places: Dong[];
}

// const fromServerData = {
//     places:[
//         {
//             place:'서울특별시',
//             place2:'help',
//             place3:'check'
//         },
//         {
//             place:'부산광역시',
//             place2:'help2',
//             place3:'check2'
//         },
//         {
//             place:'대구광역시'
//             ,place2:'help3',
//             place3:'check3'
//         },
//         {
//             place:'인천광역시'
//             ,place2:'help4'
//         },
//         {
//             place:'광주광역시'
//             ,place2:'help5'
//         },
//         {
//             place:'대전광역시'
//             ,place2:'help6'
//         },
//         {
//             place:'울산광역시'
//             ,place2:'help7'
//         },
//         {
//             place:'세종특별자치시'
//         },
//         {
//             place:'경기도'
//         },
//         {
//             place:'강원도'
//         },
//         {
//             place:'충청북도'
//         },
//         {
//             place:'충청남도'
//         },
//         {
//             place:'전라북도'
//         },
//         {
//             place:'전라남도'
//         },
//         {
//             place:'경상북도'
//         },
//         {
//             place:'경상남도'
//         },
//         {
//             place:'제주특별자치도'
//         },
//     ]
// } as DongList;

const BundleLegalDongMenu:React.FC<{
    setLegalDongHandler: (LegalDong:string) => void
    changeVisibility: () => void
    number: number
    changeMenuValue: (index:number) => void
    menuIndex: number
    changeMenuValue2 : (index:number) => void
    menuIndex2: number
    setDongName: (name:string) => void
    setDongName2: (name:string) => void
}> = ({setLegalDongHandler, changeVisibility, number, changeMenuValue, menuIndex, changeMenuValue2, menuIndex2, setDongName, setDongName2}) => {
    const { data } = useQuery(['legal-dong-item1'], () => axios.get('https://rfind-api-int.rsquare.co.kr/legal-dongs'));
    console.log(data?.data);

    return(
        <div className="css-menu" id="react-select-number-listbox">
            <div className="css-menuWrap">
                {
                    (number == 2) ? <BundleLegalDongMenuList changeVisibility={changeVisibility} menuIndex={menuIndex} changeMenuValue2={changeMenuValue2} menuIndex2={menuIndex2} number={number} setLegalDongHandler={setLegalDongHandler} setDongName={setDongName} setDongName2={setDongName2}/> :
                    (number == 3) ? <BundleLegalDongMenuList changeVisibility={changeVisibility} menuIndex={menuIndex} changeMenuValue2={changeMenuValue2} menuIndex2={menuIndex2} number={number} setLegalDongHandler={setLegalDongHandler} setDongName={setDongName} setDongName2={setDongName2}/> :
                    data?.data.map((item: any) => {
                        return(
                            <React.Fragment key={`${item.id}`}>
                                {/* {
                                    (number == 1) ? <div onClick={(e)=>{changeVisibility(); changeMenuValue(idx)}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}} >{where.place}</div> : <></>
                                } */}

                                <div onClick={(e)=>{changeVisibility(); changeMenuValue(item.id)}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}} >
                                    {item.name}
                                    </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BundleLegalDongMenu;