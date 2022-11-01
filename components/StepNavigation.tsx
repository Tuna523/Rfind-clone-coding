import React, { useState } from "react";
import BundleDistrict from "./BundleDistrict";
import BundleLegalDong from "./BundleLegalDong";
import BundleSubway from "./BundleSubway";
import LocationSelect from "./LocationSelect";
import QuoteSvg from "./QuoteSvg";
import SelectedPlace from "./SelectedPlace";
import StepperStep from "./StepperStep";

export type optionsType = {
  id:string
  name:string
  show:boolean
}

const StepNavigation:React.FC = () => {
  const [place, setPlace] = useState('');
  const [value, setValue] = useState<string[]>([]);
  const [station, setStation] = useState('');
  const [options, setOptions] = useState<optionsType[]>([
    {id:'A', name:'서울도심(CBD)', show:true},
    {id:'B', name:'여의도(YBD)', show:true},
    {id:'C', name:'마포/공덕(MBD)', show:true},
    {id:'D', name:'강남(GBD)', show:true},
    {id:'E', name:'교대/서초/사당', show:true},
    {id:'F', name:'잠실', show:true},
    {id:'G', name:'상암(DMC)', show:true},
    {id:'H', name:'성수', show:true},
    {id:'I', name:'구디/가디', show:true}
  ])

  if(value.length == 5) {
    let disable = document.querySelector('.LocationSelectTemplate_subway');
    value.length = 5;
    disable?.classList.add('LocationSelectTemplate_disabled');
  }

  if(value.length == 3) {
    let disable = document.querySelector('.LocationSelectTemplate_district');
    value.length = 3;
    disable?.classList.add('LocationSelectTemplate_disabled');
  }

  if(value.length == 5) {
    let disable = document.querySelector('.LocationSelectTemplate_legal');
    value.length = 5;
    disable?.classList.add('LocationSelectTemplate_disabled');
  }

  const setStationValueHandler = (subway:string) => {
    value.push(subway);
    setValue(value.filter((element, index) => value.indexOf(element) === index));

    console.log(value);
  }

  const setDistrictValueHandler = (district:string) => {
    value.push(district);
    setValue(value.filter((element, index) => value.indexOf(element) === index));

    console.log(value);
  }
  const setLegalDongHandler = (legalDong:string) => {
    value.push(legalDong);
    setValue(value.filter((element, index) => value.indexOf(element) === index));

    console.log(value);
  }
  
  function setPlaceHandler(placeValue:string) {
    setPlace(placeValue);
  }

  const removeValueHandler = (index:number) => {
    let disableSubway = document.querySelector('.LocationSelectTemplate_subway');
    let disableDistrict = document.querySelector('.LocationSelectTemplate_district');
    let disableLegal = document.querySelector('.LocationSelectTemplate_legal');
    setValue(prev => prev.filter((_, i) => i !== index));
    disableSubway?.classList.remove('LocationSelectTemplate_disabled');
    disableDistrict?.classList.remove('LocationSelectTemplate_disabled');
    disableLegal?.classList.remove('LocationSelectTemplate_disabled');
  }

  function setStationHandler(stationValue: string) {
      setStation(stationValue);
  }

  function resetValueHandler() {
    setValue([]);
  }

    return(
      <form>
        <div className='StepNavigationTemplate_component' tabIndex={-1} style={{boxSizing: 'border-box'}}>
          <div className='StepNavigationTemplate_content' tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div className='RecommendLayoutTemplate_component' tabIndex={-1} style={{boxSizing: 'border-box'}}>
              <div className='RecommendLayoutTemplate_inner' tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div className='Stepper_component font-normal' tabIndex={-1} style={{boxSizing: 'border-box'}}>
                  <div className='Stepper_steps' tabIndex={-1} style={{boxSizing: 'border-box', alignContent: 'flex-start', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start'}}>
                    <div className='Stepper_step Stepper_active' tabIndex={-1} style={{boxSizing:'border-box'}}>
                      <div className='Stepper_content' tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'row nowrap'}}>
                        <div className="Stepper_text" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                        <span className='Text_basicText Text_color Text_inherit Text_font Text_primary' style={{fontSize: '16px'}}>위치</span>
                        </div>
                      <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                        <svg className='SvgIcon_basicIcon SvgIcon_lightGrey SvgIcon_xxsmall' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                        <path className="SvgIcon_primary" d="M25.89 14.5507C25.6829 14.0884 25.3769 13.6686 24.99 13.316L11.39 0.914777C11.0871 0.62701 10.7275 0.394276 10.33 0.228867C9.52239 -0.0730338 8.61752 -0.0730338 7.80995 0.228867C7.41246 0.394276 7.05279 0.62701 6.74995 0.914777C6.44548 1.19257 6.20391 1.52256 6.03909 1.88586C5.87427 2.24916 5.78943 2.63863 5.78943 3.03195C5.78943 3.42528 5.87427 3.81475 6.03909 4.17804C6.20391 4.54134 6.44548 4.87134 6.74995 5.14913L18.65 16.0322L6.74995 26.8788C6.44517 27.1573 6.20339 27.4881 6.03844 27.8522C5.87348 28.2162 5.78857 28.6064 5.78857 29.0005C5.78857 29.3946 5.87348 29.7848 6.03844 30.1489C6.20339 30.5129 6.44517 30.8437 6.74995 31.1223C7.04984 31.4067 7.40839 31.634 7.80488 31.791C8.20137 31.9479 8.62794 32.0315 9.05995 32.0368C9.91697 32.0358 10.7393 31.7271 11.35 31.1771L25 18.7027C25.3869 18.3501 25.6929 17.9303 25.9 17.4681C26.1109 17.006 26.2195 16.5102 26.2195 16.0094C26.2195 15.5086 26.1109 15.0128 25.9 14.5507H25.89Z" fill="#666666"></path>
                        </svg>
                        </div>
                      </div>
                    </div>
                    <StepperStep value="면적"/>
                    <StepperStep value="예산"/>
                    <StepperStep value="옵션"/>
                    <div className="Stepper_step" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    <div className="Stepper_content" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'row nowrap'}}>
                      <div className="Stepper_text" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                        <span className="Text_basicText Text_color Text_inherit Text_font Text_primary" style={{fontSize: '16px'}}>매물추천</span>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className='Stepper_stepContainer' tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    <div className="Stepper_stepbar" tabIndex={-1} style={{boxSizing: 'border-box', width: '20%'}}></div>
                  </div>
                </div>
                <div className='RecommendLayoutTemplate_content' tabIndex={-1} style={{boxSizing: 'border-box'}}>
                  <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row nowrap'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', flex: '1 1 auto'}}>
                      <div className="StepTitleTemplate_text" tabIndex={-1} style={{boxSizing: 'border-box', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap', gap: '15px'}}>
                        <span className="font-heading1 Text_basicText Text_color Text_grey900 Text_font Text_primary Text_bold">어디에 공간을 얻고 싶으신가요?</span>
                        <p className="BodyText_bodyText BodyText_body2 BodyText_inherit">공간을 얻고 싶은 곳을 선택해 주세요.
                        (최대 5개)</p>
                      </div>
                      <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '60px 0px 40px'}}>
                        <div tabIndex={-1} style={{boxSizing: 'border-box'}}><div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 40px'}}>
                          <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', alignContent: 'flex-start', alignItems: 'start', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'flex-start'}}>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '0px 0px 15px 0px', flexBasis: '0', flexGrow: '0', flexShrink: '0'}}>
                              <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', alignContent: 'flex-start', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between'}}>
                                <div tabIndex={-1} style={{boxSizing: 'border-box', padding: '0px'}}>
                                  <span className="font-large Text_basicText Text_color Text_basic Text_font Text_primary Text_bold">지역 선택</span>
                                  <span className="font-large Text_basicText Text_color Text_primary Text_font Text_primary Text_bold"> *</span>
                                </div>
                                <div tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
                              </div>
                            </div>
                            <div tabIndex={-1} style={{boxSizing: 'border-box', flexBasis: 'auto', flexGrow: '1', flexShrink: '1'}}>
                              <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexFlow: 'row wrap', gap: '30px'}}>
                                <div id="radio-LocationSelect-SUBSTATION" role={"button"} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer'}}>
                                 <LocationSelect setPlaceHandler={setPlaceHandler} location="SUBSTATION" value="지하철" resetValueHandler={resetValueHandler}/>
                                </div>
                                <div id="radio-LocationSelect-DISTRICT" role={"button"} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer'}}>
                                <LocationSelect setPlaceHandler={setPlaceHandler} location="DISTRICT" value="오피스 권역" resetValueHandler={resetValueHandler}/>
                                </div>
                                  <div id="radio-LocationSelect-LEGAL_DONG" role={"button"} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer'}}>
                                  <LocationSelect setPlaceHandler={setPlaceHandler} location="LEGAL_DONG" value="법정동" resetValueHandler={resetValueHandler}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="Divider_basicDivider Divider_lightGrey Divider_size1px Divider_vertical Divider_dashed"/>
                        {
                          (place == '지하철') ? <BundleSubway setStationHandler={setStationHandler} setStationValueHandler={setStationValueHandler} station={station}/> : <></>
                        }
                        {
                          (place == '오피스 권역') ? <BundleDistrict options={options} setDistrictValueHandler={setDistrictValueHandler}/> : <></>
                        }
                        {
                          (place == '법정동') ? <BundleLegalDong setLegalDongHandler={setLegalDongHandler} /> : <></>
                        }
                        {
                          (place == '') ? <></> : <SelectedPlace value={value} removeValueHandler={removeValueHandler} options={options}/>
                        }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='RecommendLayoutTemplate_background' tabIndex={-1} style={{boxSizing: 'border-box', alignContent: 'flex-start', alignItems: 'center', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'flex-start'}}>
                <div className="RecommendLayoutTemplate_image" tabIndex={-1} style={{boxSizing: 'border-box'}}>
                  <div className="QuoteBackground_component" tabIndex={-1} style={{boxSizing: 'border-box', width: '1720px'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                      <div className="QuoteBackground_DoubleQuote" tabIndex={-1} style={{boxSizing: 'border-box', alignContent: 'flex-start', alignItems: 'start', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '6%', justifyContent: 'flex-start'}}>
                        <QuoteSvg/>
                        <QuoteSvg/>
                      </div>
                    </div>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', display: 'flex'}}>
                      <div className="QuoteBackground_end QuoteBackground_DoubleQuote" tabIndex={-1} style={{boxSizing: 'border-box', alignContent: 'flex-start', alignItems: 'start', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '6%', justifyContent: 'flex-start'}}>
                        <QuoteSvg/>
                        <QuoteSvg/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='StepNavigate_component' tabIndex={-1} style={{boxSizing: 'border-box'}}>
            <div className="StepNavigate_buttons" tabIndex={-1} style={{boxSizing: 'border-box', alignContent: 'flex-start', alignItems: 'inherit', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start'}}>
              <div className="StepNavigate_prev" tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
              <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                {
                  (value.length >= 1) ? <button id="이후" type="submit" className="Button_basicButton Button_contained Button_primary Button_large">다음</button> : <button disabled id="이후" type="submit" className="Button_basicButton Button_contained Button_primary Button_large">다음</button>
                  }
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}

export default StepNavigation;