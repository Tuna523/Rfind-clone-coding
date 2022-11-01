import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface dong {
    place: string
    place2: string
}

interface dongs {
    places: dong[]
}

/* const fromServerData = {
    places:[
        {
            place: '개포동',
            place2: '강일동'
        },
        {
            place: '논현동',
            place2: '고덕동'
        },
        {
            place: '대치동',
            place2: '길동'
        },
        {
            place: '도곡동',
            place2: '둔춘동'
        },
        {
            place: '삼성동',
            place2: '명일동'
        },
        {
            place: '세곡동',
            place2: '상일동'
        },
        {
            place: '수서동',
            place2: '성내동'
        },
        {
            place: '신사동',
            place2: '암사동'
        },
        {
            place: '압구정동',
            place2: '천호동'
        },
        {
            place: '역삼동'
        },
        {
            place: '율현동'
        },
        {
            place: '일원동'
        },
        {
            place: '자곡동'
        },
        {
            place: '청담동'
        }
    ]
} as dongs; */

const BundleLegalDongMenuList2:React.FC<{
    menuIndex: number
    menuIndex2: number
    setLegalDongHandler: (LegalDong: string) => void
}> = ({menuIndex, menuIndex2, setLegalDongHandler}) => {
    const { data } = useQuery(['test3', menuIndex2], () => axios.get(`https://rfind-api-int.rsquare.co.kr/legal-dongs?code=${menuIndex2}`))

    return(
        <>
            {
            data?.data.map((item:any) => {
                return(
                    <React.Fragment key={`${item.id}`}>
                        {/* {
                            (menuIndex == 1 && menuIndex2 == 1) ? <div onClick={(e)=>{setLegalDongHandler(where.place)}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}}>{where.place}</div> :
                            (menuIndex == 1 && menuIndex2 == 2) ? <div onClick={(e)=>{setLegalDongHandler(where.place2)}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}}>{where.place2}</div> : <></>
                        } */}
                        <div onClick={(e)=>{setLegalDongHandler(item.name)}} className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}}>{item.name}</div>
                    </React.Fragment>
                )
            })
        }
        </>
    )
}

export default BundleLegalDongMenuList2;