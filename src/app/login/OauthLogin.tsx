"use client";
const onNaverLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/naver";
}
const onGoogleLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
}
const onKakaoLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/kakao";

}

const OauthLogin = () => {
  return (
      <div className="login-buttons">
        <button className="login-button naver-login" onClick={onNaverLogin}>
          <img src={"login/naver-brand-logo.png"} alt={"logo"}/>Naver &nbsp; 계정으로 로그인
        </button>
        <button className="login-button kakao-login" onClick={onKakaoLogin}>
          <img src={"login/kakao-brand-logo.png"} alt={"logo"}/>Kakao &nbsp;계정으로 로그인
        </button>
        <button className="login-button google-login" onClick={onGoogleLogin}>
          <img src={"login/google-brand-logo.png"} alt={"logo"}/>Google 계정으로 로그인
        </button>
      </div>
  )
}

export default OauthLogin;