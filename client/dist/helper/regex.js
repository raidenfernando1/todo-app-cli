export const checkSpecialChars = (str) => {
    const regex = /[^a-zA-Z0-9]/;
    if (regex.test(str)) {
        return true;
    }
    else {
        return false;
    }
};
export default checkSpecialChars;
