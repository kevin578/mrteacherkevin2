export const checkUsername = (username)=> {
    if (username.length < 7 || username.length > 15) {
        return { success: false, msg: "Username must be between 7 and 15 characters." }
    } 
    if (username.includes(" ")) {
        return { success: false, msg: "Username cannont have spaces."};
    }
    return {success: true};
};