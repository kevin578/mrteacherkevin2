export const checkUsername = (username)=> {
    if (username.length < 7) {
        return false;
    } 
    if (userName.includes(" ")) {
        return false;
    }
    return true;
};