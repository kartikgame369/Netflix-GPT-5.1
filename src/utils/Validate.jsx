
const checkvalidData = (email , password)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;
    const isNameValid = true; // Placeholder for name validation if needed in future
    if(!isEmailValid){
        return { message:"Invalid email format"};
    }
    if(!isPasswordValid){
        return { message:"Password must be at least 8 characters long"};
    }
    if(!isNameValid){
        return { message:"Name cannot be empty"};
    }

}

export {checkvalidData};