import React, { useEffect, useRef, useState } from 'react'
import Helmet from 'react-helmet'

const createShareButton = (button) => {
   global.Kakao.Link.createDefaultButton({
      container: button,
      objectType: 'feed',
      content: {
         title: '피싱예방24',
         description: '보이스피싱 예방과 웹툰, 해법',
         imageUrl: 'https://www.korbit.co.kr/assets/app_mockups3.dd9722e2.png',
         link: {
            mobileWebUrl: 'https://www.korbit.co.kr',
            webUrl: 'https://www.korbit.co.kr',
         },
      },
   })
}

const KakaoTest = () => {

   const shareKakaoRef = useRef(null)

   const [initedKakao, setInitedKakao] = useState(false)

   const [error, setError] = useState('')

   useEffect(() => {
      const loop = setInterval(() => {
         const kakaoApi = global.Kakao;
         if (kakaoApi) {
            try {
               kakaoApi.init('73b72d87ae90ff1de6dfe1d34b18de43')
               setInitedKakao(kakaoApi.isInitialized())
               createShareButton(shareKakaoRef.current);
            } catch (err) {
               console.error(err);
               setError(err.message)
            }
            clearInterval(loop);
         };
      }, 500)
   }, [])

   return (
      <>
         <Helmet>
            <script src="https://developers.kakao.com/sdk/js/kakao.js" />
         </Helmet>
         {
            initedKakao &&
            <button ref={shareKakaoRef}>카카오톡 공유하기2</button>
         }
         <p>
            {error}
         </p>
      </>
   )
}

export default KakaoTest