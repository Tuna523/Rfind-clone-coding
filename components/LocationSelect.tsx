import React from "react";

const LocationSelect:React.FC<{
    location:string
    value:string
    setPlaceHandler:(placeValue:string) => void
}> = ({location,value,setPlaceHandler}) => {
    function handleOnClick() {
        let test = document.querySelector('#radio-LocationSelect-'+location);
        let icon = test?.children[0];
        let iconChild = icon?.children[0];
        let checkedSvg = document.querySelectorAll('.SvgIcon_white')[0];
        let checkedRadio = document.querySelectorAll('.Radio_checked')[0];
        
            checkedRadio?.classList.remove('Radio_checked');
            checkedSvg?.classList.replace('SvgIcon_white', 'SvgIcon_basic');
            icon?.classList.add('Radio_checked');
            iconChild?.classList.replace('SvgIcon_basic', 'SvgIcon_white');
    }
    return(
    <div onClick={(e)=> {e.preventDefault(); handleOnClick(); setPlaceHandler(value)}} className="Radio_component Radio_round" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start center', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '10px'}}>
        <svg className="SvgIcon_basicIcon SvgIcon_basic SvgIcon_xsmall" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path className="SvgIcon_primary" d="M13.0465 27.9725C12.5162 27.9711 11.9914 27.8643 11.5027 27.6582C11.0139 27.4521 10.5711 27.1509 10.1998 26.7722L0.951311 17.3956C0.649812 17.0977 0.410437 16.743 0.247138 16.3519C0.0838397 15.9607 -0.000167135 15.5411 2.49644e-07 15.1173C0.000167634 14.6935 0.0845077 14.2739 0.248115 13.8829C0.411723 13.492 0.651286 13.1374 0.953021 12.8397C1.25475 12.5421 1.61262 12.3074 2.0058 12.1491C2.39898 11.9909 2.81966 11.9123 3.24344 11.918C3.66723 11.9236 4.08567 12.0133 4.47449 12.182C4.86332 12.3506 5.21476 12.5948 5.50847 12.9004L12.9406 20.4364L26.4302 5.0482C26.9945 4.42728 27.7799 4.05273 28.6176 4.00515C29.4552 3.95758 30.2782 4.24079 30.9091 4.79384C31.54 5.34688 31.9285 6.12553 31.9911 6.96219C32.0536 7.79886 31.7852 8.62664 31.2436 9.26736L16.0394 26.6001C15.6795 27.0138 15.2384 27.3491 14.7435 27.5851C14.2487 27.8212 13.7106 27.9531 13.1627 27.9725H13.0465Z"></path>
        </svg>
      <span className="Text_basicText Text_color Text_inherit Text_font Text_primary Text_bold" style={{fontSize: '14px'}}>{value}</span>
    </div>
    )
}

export default LocationSelect;