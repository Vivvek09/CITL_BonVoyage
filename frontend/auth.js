// auth.js

export const storeToken = (accessToken, refreshToken, expiresIn) => {
    const expirationTime = Date.now() + expiresIn * 1000; // expiresIn is in seconds
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('tokenExpirationTime', expirationTime);
  };
  
  export const isTokenExpired = () => {
    const expirationTime = localStorage.getItem('tokenExpirationTime');
    return Date.now() > expirationTime;
  };
  
  export const handleTokenExpiration = (navigate, setIsLoggedIn) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpirationTime');
    setIsLoggedIn(false);
    navigate('/');
  };
  
  export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpirationTime');
    document.cookie = 'accessToken=; Max-Age=0';
    document.cookie = 'refreshToken=; Max-Age=0';
  };