import React, { useEffect, useState } from "react";
import PasswordModal from "./PasswordModal";

const ReactModalPortal:React.FC<{
  loginHandler: () => void
}> = ({loginHandler}) => {
  const [password, setPassword] = useState(false);
  useEffect(() =>{
    let firstOverlay = document.querySelector('.Modal_overlay');
    let noOverlay = document.querySelector('.no-overlay');
    let modalContent = document.querySelector('.ReactModal__Content')
    if(password == false){
      noOverlay?.classList.replace('no-overlay', 'Modal_overlay');
      modalContent?.classList.remove('Modal_hidden');
    }
    else{
      firstOverlay?.classList.replace('Modal_overlay', 'no-overlay');
      modalContent?.classList.add('Modal_hidden');
    }
  }, [password])
  function findPasswordHandler() {
    setPassword(!password)
  }
    return(
      <>
        <div className='ReactModalPortal'>
        <div className='ReactModal__Overlay ReactModal__Overlay--after-open Modal_overlay'>
          <div className='ReactModal__Content React__Content--after-open Modal_content' tabIndex={-1} role="dialog" aria-modal="true" style={{height: 'max-content', width: 'max-content'}}>
            <div id='modal-2' tabIndex={-1} style={{boxSizing: 'border-box', height: 'max-content', width: 'max-content', minHeight: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow:'column nowrap'}}>
              <div className='theme-vermilioin' tabIndex={-1} style={{boxSizing: 'border-box'}}>
                <div className='BasicModal_modal' tabIndex={-1} style={{boxSizing: 'border-box', height: 'max-content', width: '400px'}}>
                  <div className='BasicModal_header' tabIndex={-1} style={{boxSizing: 'border-box', height: '70px', width: '100%', flex: '0 0 70px'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap'}}>
                      <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%'}}>
                        <span className='font-heading2 Text_basicText Text_color Text_inherit Text_font Text_primary Text_bold'>멤버십 로그인</span>
                      </div>
                      <div onClick={(e) => {e.preventDefault(); loginHandler()}} id='closeModal' role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer'}}>
                        <svg className='SvgIcon_basicIcon SvgIcon_dark SvgIcon_medium' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                        <path className="SvgIcon_primary__Z9Quz" d="M20.2332 15.9863L31.0858 5.08785C31.3641 4.80989 31.585 4.47971 31.7357 4.11621C31.8864 3.7527 31.9639 3.36301 31.9639 2.96946C31.9639 2.5759 31.8864 2.18622 31.7357 1.82271C31.585 1.45921 31.3641 1.12902 31.0858 0.85107C30.5143 0.305111 29.7546 0.000488281 28.9646 0.000488281C28.1746 0.000488281 27.4149 0.305111 26.8435 0.85107L16 11.7404L5.12004 0.85107C4.55047 0.31578 3.7985 0.017815 3.01718 0.017815C2.23586 0.017815 1.4839 0.31578 0.914327 0.85107C0.635949 1.12902 0.415089 1.45921 0.264395 1.82271C0.113701 2.18622 0.0361328 2.5759 0.0361328 2.96946C0.0361328 3.36301 0.113701 3.7527 0.264395 4.11621C0.415089 4.47971 0.635949 4.80989 0.914327 5.08785L11.7943 15.9863L0.914327 26.8757C0.354339 27.4382 0.0399156 28.2 0.0399156 28.9941C0.0399156 29.7881 0.354339 30.5499 0.914327 31.1124C1.17576 31.3867 1.48577 31.6101 1.82861 31.7713C2.1917 31.9424 2.58845 32.0299 2.98976 32.0275C3.38371 32.0152 3.77294 31.9379 4.14176 31.7987C4.5079 31.6333 4.83974 31.4005 5.12004 31.1124L16 20.2231L26.88 31.1124C27.1601 31.3873 27.4887 31.6076 27.8492 31.7621C28.2067 31.9223 28.5915 32.0124 28.9829 32.0275C29.3922 32.0222 29.7963 31.9351 30.1715 31.7713C30.5132 31.6082 30.8228 31.385 31.0858 31.1124C31.3644 30.8337 31.5855 30.5028 31.7363 30.1385C31.8871 29.7742 31.9647 29.3838 31.9647 28.9895C31.9647 28.5952 31.8871 28.2047 31.7363 27.8405C31.5855 27.4762 31.3644 27.1452 31.0858 26.8665L20.2332 15.9863Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div tabIndex={-1} style={{boxSizing: 'border-box'}}>
                    <div tabIndex={-1} style={{boxSizing: 'border-box', width: '100%', flex: '1 1 auto'}}>
                      <form>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', padding: '20px 20px 0px'}}>
                          <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'start', display: 'flex', flexFlow: 'column nowrap', gap: '10px'}}>
                            <span className='font-normal Text_basicText Text_color Text_inherit Text_font Text_primary Text_bold'>이메일 주소와 비밀번호를 입력해 주세요.</span>
                            <div className='Input_component Input_medium' id='input-email' role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'text', width: '360px'}}>
                              <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '4px'}}>
                                <input name='email' type={'text'} placeholder='이메일 주소를 입력해주세요.' maxLength={50} />
                              </div>
                            </div>
                            <div className='Input_component Input_medium' id='input_password' role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'text', width: '360px'}}>
                              <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'center', display: 'flex', flexFlow: 'row nowrap', gap: '4px'}}>
                                <input name='password' type={'password'} placeholder="비밀번호를 입력해주세요."/>
                              </div>
                            </div>
                          </div>
                          <div tabIndex={-1} style={{boxSizing: 'border-box', margin: '20px 0px 0px'}}>
                            <button onClick={(e)=> {e.preventDefault(); alert('로그인 버튼 클릭됨')}} id='login-btn' type='submit' className='Button_basicButton Button_contained Button_primary Button_medium' style={{width: '360px'}}>로그인</button>
                            <div onClick={(e)=>{e.preventDefault(); findPasswordHandler();}} id='findPassword' role={'button'} tabIndex={0} style={{boxSizing: 'border-box', textAlign: 'center', cursor: 'pointer', padding: '20px 0px'}}>
                              <span className='font-normal Text_basicText Text_color Text_inherit Text_font Text_primary'>비밀번호 찾기</span>
                            </div>
                          </div>
                        </div>
                        <hr className='Divider_basicDivider Divider_lightGrey Divider_size1px Divider_vertical Divider_solid'/>
                        <div tabIndex={-1} style={{boxSizing: 'border-box', padding: '20px'}}>
                          <span className='font-small Text_basicText Text_color Text_grey800 Text_font Text_primary'>아직 알스퀘어 멤버십 회원이 아니신가요?</span>
                          <br/>
                          <div tabIndex={-1} style={{boxSizing: 'border-box', height: '100%', minHeight: '100%', width: '100%', placeContent: 'flex-start', alignItems: 'baseline', display: 'flex', flexFlow: 'row nowrap'}}>
                            <div id='매물 추천 서비스로 이동' role={'button'} tabIndex={0} style={{boxSizing: 'border-box', cursor: 'pointer'}}>
                              <span onClick={(e)=>{e.preventDefault(); loginHandler();}} className='font-small Text_basicText Text_color Text_grey800 Text_font Text_link'>매물 추천 서비스</span>
                            </div>
                            <span className='font-small Text_basicText Text_color Text_grey800 Text_font Text_primary'>를 통해 멤버십 회원이 되어보세요.</span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        password ? <PasswordModal findPasswordHandler={findPasswordHandler}/> : ''
      }
      </>
    )
}

export default ReactModalPortal;