import React from "react";

const HeaderLinks:React.FC = () => {
    return(
    <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
        <div tabIndex={-1} style={{boxSizing: 'border-box', height: 'content', minHeight: 'content', width: '100%', alignContent: 'flex-start', alignItems:'center', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '60px', justifyContent: 'flex-start'}}>
            <a className='TextLink_component TextLink_color TextLink_basic TextLink_bold' href='https://www.rsquare.co.kr/information/rsquare'>
                <span className='Text_basicText Text_color Text_inherit Text_font Text_primary' style={{fontSize: '16px',}}>알스퀘어 소개</span>
            </a>
            <a className='TextLink_component TextLink_color TextLink_basic TextLink_bold' href='https://www.rsquare.co.kr/information/use'>
                <span style={{fontSize:'16px'}} className='Text_basicText Text_color Text_inherit Text_font Text_primary'>이용안내</span>
            </a>
        </div>
    </div>
    )
}

export default HeaderLinks;