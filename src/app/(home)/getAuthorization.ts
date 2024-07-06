import axios from "axios";

const getAuthorization = async (setIsLoggedIn: (isLoggedIn: boolean) => void) => {
  console.log('getAuthorization');
  if (localStorage.getItem('jwt') !== null) {
    setIsLoggedIn(true);
  } else {
    await moveJwtToLocalStorage(setIsLoggedIn);
  }
}

const moveJwtToLocalStorage = async (setIsLoggedIn: (isLoggedIn: boolean) => void) => {
  if (localStorage.getItem('jwt') === null) {
    axios.get('http://localhost:8080/api/v1/auth/jwt', {withCredentials: true})
        .then(response => {
          const jwt = response.headers['authorization']; // headers에서 JWT 추출
          if (jwt) {
            localStorage.setItem('jwt', jwt);
            setIsLoggedIn(true);
          }
        })
        .catch(error => console.error('Error: jwt 요청 실패', error));
  }
};

export default getAuthorization;