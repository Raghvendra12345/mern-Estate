///this is made to throw error because if the password is not a certain length then it throw error

export const errorHandler=(statusCode,message)=>{
    const error=new Error()
    error.statusCode=statusCode;
    error.message=message;
    return error;
}