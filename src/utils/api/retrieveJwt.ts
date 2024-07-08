const retrieveJwt = async (): Promise<string | null> => {
  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return jwt;
    } else {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/jwt', {
          credentials: 'include',
        });
        const newJwt = response.headers.get('authorization');
        if (newJwt) {
          return newJwt;
        }
      } catch (error) {
        console.error('Error retrieving JWT:', error);
      }
    }
  }
  return null;
};

export default retrieveJwt;