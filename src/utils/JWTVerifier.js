import jwtDecode from 'jwt-decode';
export const isTokenValid = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // divide by 1000 to convert to seconds
        if (decodedToken.exp < currentTime) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        return false;
    }
}
export const getRole = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.role;
    } catch (error) {
        return error;
    }
}
export const getPhone = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.sub;
  } catch (error) {
    return false;
  }
};
