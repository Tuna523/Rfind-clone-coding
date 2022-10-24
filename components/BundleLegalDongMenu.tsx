import React from "react";

interface Dong{
    place: string;
}

interface DongList{
    places: Dong[];
}

const fromServerData = {
    places:[
        {
            place:'서울특별시'
        },
        {
            place:'부산광역시'
        },
        {
            place:'대구광역시'
        },
        {
            place:'인천광역시'
        },
        {
            place:'광주광역시'
        },
        {
            place:'대전광역시'
        },
        {
            place:'울산광역시'
        },
        {
            place:'세종특별자치시'
        },
        {
            place:'경기도'
        },
        {
            place:'강원도'
        },
        {
            place:'충청북도'
        },
        {
            place:'충청남도'
        },
        {
            place:'전라북도'
        },
        {
            place:'전라남도'
        },
        {
            place:'경상북도'
        },
        {
            place:'경상남도'
        },
        {
            place:'제주특별자치도'
        },
    ]
} as DongList;

const BundleLegalDongMenu:React.FC<{
    setLegalDongHandler: (LegalDong:string) => void
}> = ({setLegalDongHandler}) => {
    return(
        <div className="css-menu" id="react-select-number-listbox">
            <div className="css-menuWrap">
                {
                    fromServerData.places.map((where, idx) => {
                        return(
                            <div className="Select_option Select_isSelected Select_isFocused" id="react-select-number-option-0" role="button" tabIndex={-1} style={{boxSizing: 'border-box', cursor: 'pointer'}} key={'place'+idx}>{where.place}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BundleLegalDongMenu;