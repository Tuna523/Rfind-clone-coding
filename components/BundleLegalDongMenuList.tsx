import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import BundleLegalDongMenuList2 from "./BundleLegalDongMenuList2";

interface dongs {
    place: string
    place2: string
}

interface dongs {
    places: dongs[],
}

/* const fromServerData = {
    places:[
        {
            place: '강남구',
            place2: '강서구'
        },
        {
            place: '강동구',
            place2: '금정구'
        },
        {
            place: '강북구',
            place2: '기장군'
        },
        {
            place: '강서구',
            place2: '남구'
        },
        {
            place: '관악구',
            place2: '동구'
        },
        {
            place: '광진구',
            place2: '동래구'
        },
        {
            place: '구로구',
            place2: '부산진구'
        },
        {
            place: '금천구',
            place2: '북구'
        },
        {
            place: '노원구',
            place2: '사상구'
        },
        {
            place: '도봉구',
            place2: '사하구'
        },
        {
            place: '동대문구',
            place2: '수영구'
        },
        {
            place: '동작구',
            place2: '연제구'
        },
        {
            place: '마포구',
            place2: '영도구'
        },
        {
            place: '서대문구',
            place2: '중구'
        },
        {
            place: '서초구',
            place2: '해운대구'
        },
        {
            place: '성동구'
        },
        {
            place: '성북구'
        },
        {
            place: '송파구'
        },
        {
            place: '양천구'
        },
        {
            place: '영등포구'
        },
        {
            place: '용산구'
        },
        {
            place: '은평구'
        },
        {
            place: '종로구'
        },
        {
            place: '중구'
        },
        {
            place: '중랑구'
        },

    ]
} as dongs; */



const BundleLegalDongMenuList:React.FC<{
    menuIndex: number;
    changeVisibility: () => void
    changeMenuValue2: (index:number) => void
    menuIndex2: number
    number: number
    setLegalDongHandler : (LegalDong:string) => void
    setDongName: (name:string) => void
    setDongName2: (name:string) => void
}> = ({menuIndex, changeVisibility, changeMenuValue2, menuIndex2, number, setLegalDongHandler}) => {
    const { data } = useQuery(['test2', menuIndex], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${menuIndex}`));

    return(
        <>
        {
            (number == 3) ? <BundleLegalDongMenuList2 setLegalDongHandler={setLegalDongHandler} menuIndex={menuIndex} menuIndex2={menuIndex2}/> :
            data?.data.map((item: any) => {
                return(
                    <React.Fragment key={`${item.id}`}>
                    {/* {
                        (menuIndex == 1) ? <div onClick={(e) => {changeVisibility(); changeMenuValue2(idx);}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}}>{where.place}</div> : 
                        (menuIndex == 2) ? <div onClick={(e) => {changeVisibility(); changeMenuValue2(idx);}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}}>{where.place2}</div> : <></>
                    } */}
                    <div onClick={(e) => {changeVisibility(); changeMenuValue2(item.id);}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}}>{item.name}</div>
                    </React.Fragment>
                )
            }
            
            )
        }

        </>
    )
}

export default BundleLegalDongMenuList;