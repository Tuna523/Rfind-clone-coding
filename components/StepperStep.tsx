import React from "react";

const StepperStep:React.FC<{
    value:string;
}> = ({value}) => {
    return(
      <div className="Stepper_step" tabIndex={-1} style={{boxSizing: 'border-box'}}>
        <div className="Stepper_content" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'row nowrap'}}>
          <div className="Stepper_text" tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <span className="Text_basicText Text_color Text_inherit Text_font Text_primary" style={{fontSize: '16px'}}>{value}</span>
          </div>
          <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <svg className="SvgIcon_basicIcon SvgIcon_lightGrey SvgIcon_xxsmall" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path className="SvgIcon_primary" d="M25.89 14.5507C25.6829 14.0884 25.3769 13.6686 24.99 13.316L11.39 0.914777C11.0871 0.62701 10.7275 0.394276 10.33 0.228867C9.52239 -0.0730338 8.61752 -0.0730338 7.80995 0.228867C7.41246 0.394276 7.05279 0.62701 6.74995 0.914777C6.44548 1.19257 6.20391 1.52256 6.03909 1.88586C5.87427 2.24916 5.78943 2.63863 5.78943 3.03195C5.78943 3.42528 5.87427 3.81475 6.03909 4.17804C6.20391 4.54134 6.44548 4.87134 6.74995 5.14913L18.65 16.0322L6.74995 26.8788C6.44517 27.1573 6.20339 27.4881 6.03844 27.8522C5.87348 28.2162 5.78857 28.6064 5.78857 29.0005C5.78857 29.3946 5.87348 29.7848 6.03844 30.1489C6.20339 30.5129 6.44517 30.8437 6.74995 31.1223C7.04984 31.4067 7.40839 31.634 7.80488 31.791C8.20137 31.9479 8.62794 32.0315 9.05995 32.0368C9.91697 32.0358 10.7393 31.7271 11.35 31.1771L25 18.7027C25.3869 18.3501 25.6929 17.9303 25.9 17.4681C26.1109 17.006 26.2195 16.5102 26.2195 16.0094C26.2195 15.5086 26.1109 15.0128 25.9 14.5507H25.89Z" fill="#666666"></path>
            </svg>
          </div>
        </div>
      </div>
    )
}
export default StepperStep;