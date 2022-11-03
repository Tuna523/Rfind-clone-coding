import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import ReactModalPortal from '../components/ReactModalPortal'
import StepNavigation from '../components/StepNavigation'

const Home: NextPage = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if(login == false){
      document.body.classList.add(
        'theme-vermilion',
        'screen-lg'
      );
      document.body.classList.remove(
        'ReactModal__Body--open'
      )
    }
    else {
      document.body.classList.add(
        'theme-vermilion',
        'screen-lg',
        'ReactModal__Body--open'
      )
    }
  }, [login]);
  function loginHandler() {
    setLogin(!login);
  }
  return (
    <>
      <Head>
        <title>사무실 찾을 땐, 알스퀘어 RSQUARE | 사무실</title>
        <link href='https://www.rsquare.co.kr' rel='canonical'/>
        <meta content='website' property='og:type'/>
        <meta content='알스퀘어' property='og:site_name'/>
        <meta content='알스퀘어 RSQUARE | 상업용 부동산 서비스' property='og:title'/>
        <meta content='국내 1위 프롭테크 기업, 임차대행, 임대관리, 빌딩 및 토지 매입매각, 물류창고, 해외 부동산 서비스를 제공합니다.' property='og:description'/>
        <meta content='https://image.rsquare.co.kr/x/assets/images/og/type_01.jpg' property='og:image'/>
        <meta content='https://www.rsquare.co.kr' property='og:url'/>
        <meta content='summary_large_image' name='twitter:card'/>
        <meta content='알스퀘어' name='twitter:site'/>
        <meta content='알스퀘어 RSQUARE | 상업용 부동산 서비스' name='twitter:title'/>
        <meta content='전수조사 기반 사무실 임대차 전문 서비스, 알스퀘어' name='twitter:description'/>
        <meta content='https://image.rsquare.co.kr/x/assets/images/og/type_01.jpg' property='twitter:image'/>
        <meta content='사무공간 임대차부터 매매, 인테리어, 사무용 가구까지 한 번에! 상업용 부동산 전문 솔루션을 end-to-end로 제공합니다. 전국 9만 여 사무공간을 직접 방문해 구축한 DB를 이용해보세요.' name='description'/>
        <meta content='상업용 부동산, 부동산 서비스, 부동산 종합 서비스, 사무실임대, 오피스임대, 사무실, 매입매각, 임대관리, 빌딩 임대, 건물 임대, 물류창고 임대, 알스퀘어, 종로, 종각역, 광화문, 충무로, 잠실, 송파, 시청, 중구, 종로구, 강동구, 여의도, 성수동, 압구정, 서울역, 봉은사역, 홍대, 홍대입구역, 테헤란로, 가로수길, 언주역, 삼성역, 선정릉, 선정릉역, 신사동, 신사역, 청담역, 청담동, 농현역, 강남역, 선릉역' name='keywords'/>
        <meta content='0dc690be729a648a21c218894b7bff3cf07ca453' name='naver-site-verification'/>
        <meta name='next-head-count' content='19'/>
        <link rel='preconnect' href='https://fonts.gstatic.com'/>
        <link rel='preload' href='https://www.rsquare.co.kr/_next/static/css/9ae883b6346517c5.css' as='style'/>
        {/* <link rel='stylesheet' href='https://www.rsquare.co.kr/_next/static/css/9ae883b6346517c5.css' data-n-g/> */}
        <link rel='preload' href='https://www.rsquare.co.kr/_next/static/css/c2046d6d87b9bdc7.css' as='style'/>
        {/* <link rel='stylesheet' href='https://www.rsquare.co.kr/_next/static/css/c2046d6d87b9bdc7.css' data-n-p/> */}
        <noscript data-n-css></noscript>
        <script type='text/javascript' async src='https://cdn.channel.io/plugin/ch-plugin-web.js'></script>
      </Head>
      <header className='Header_container theme-vermilion'>
          <Header login={login} loginHandler={loginHandler}/>
      </header>
      <div tabIndex={-1} style={{boxSizing:'border-box'}}>
        <StepNavigation/>
      </div>
      <div id='modal-wrapper' tabIndex={-1} style={{boxSizing: 'border-box'}}></div>
      <div style={{position: 'fixed', zIndex: '9999', top: '16px', left: '16px', right: '16px', bottom:' 16px', pointerEvents: 'none'}}></div>
      {
        login ? <ReactModalPortal loginHandler={loginHandler}/> : ''
      }
    </>
  )
}

export default Home;