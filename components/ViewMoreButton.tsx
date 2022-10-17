import React from "react";

const ViewMoreButton = () => {
    return(
        <button id="view-more" type="button" className="Button_basicButton Button_contained Button_basic Button_medium" style={{margin: '30px 0px 0px', width: '100%'}}>
            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start center', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
                <span className="font-normal Text_basicText Text_color Text_grey800 Text_font Text_primary">더보기</span>
                <svg className="SvgIcon_basicIcon SvgIcon_grey800 SvgIcon_xsmall" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path className="SvgIcon_primary" d="M31.0858 6.74996C30.5138 6.15852 29.7564 5.82898 28.9692 5.82898C28.182 5.82898 27.4247 6.15852 26.8527 6.74996L16.0001 18.66L5.12009 6.74996C4.54949 6.1672 3.79792 5.84307 3.01723 5.84307C2.23655 5.84307 1.48497 6.1672 0.914376 6.74996C0.635718 7.05457 0.414664 7.41624 0.263846 7.81431C0.113027 8.21239 0.0354004 8.63906 0.0354004 9.06996C0.0354004 9.50086 0.113027 9.92754 0.263846 10.3256C0.414664 10.7237 0.635718 11.0854 0.914376 11.39L13.3029 25C13.6566 25.3879 14.0758 25.6969 14.5372 25.91C15.0015 26.1173 15.4986 26.2226 16.0001 26.22C16.4985 26.2216 16.9924 26.1162 17.4538 25.91C17.9197 25.7006 18.3426 25.3912 18.6972 25L31.0858 11.39C31.3645 11.0854 31.5855 10.7237 31.7363 10.3256C31.8872 9.92754 31.9648 9.50086 31.9648 9.06996C31.9648 8.63906 31.8872 8.21239 31.7363 7.81431C31.5855 7.41624 31.3645 7.05457 31.0858 6.74996Z"></path>
                </svg>
            </div>
        </button>
    )
}

export default ViewMoreButton;