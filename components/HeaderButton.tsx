import React from "react";

const HeaderButton:React.FC<{
    login: boolean
    loginHandler: () => void
}> = ({login, loginHandler}) => {
    function handleOnClick() {
        loginHandler();
        console.log(login);
    }
    return(
        <div onClick={(e) => {e.preventDefault(); handleOnClick();}} tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', alignContent: 'flex-start', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '20px', justifyContent: 'flex-end'  }}>
                <button id='login' className='Button_basicButton Button_contained Button_basic Button_medium'>멤버십 로그인</button>
            </div>
        </div>
    )
}

export default HeaderButton;