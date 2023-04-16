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
