
const checkvalidData = (email , password ,name)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = name ? name.length >= 8 : true;
    if(!isEmailValid){
        return "Invalid email format";
    }
    if(!isPasswordValid){
        return "Password must be at least 8 characters long";
    }
    if(!isNameValid){
        return "enter correct username";
    }
    return null;
}

export {checkvalidData};