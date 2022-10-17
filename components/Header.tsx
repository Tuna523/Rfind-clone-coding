import React from "react";
import HeaderButton from "./HeaderButton";
import HeaderLinks from "./HeaderLinks";
import Logo from "./Logo";

const Header:React.FC<{
    login: boolean
    loginHandler: () => void
}> = ({login, loginHandler}) => {
    return(
        <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', alignContent: 'flex-start', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between'}}>
            <Logo/>
            <HeaderLinks/>
            <HeaderButton login={login} loginHandler={loginHandler}/>
        </div>
    )
}

export default Header