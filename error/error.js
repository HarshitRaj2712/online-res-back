class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode=statuscode;
    }
}

export const middlewares =(err,req,res,next)=>{
    err.message=err.message||"INTERNAL SERVER ERROR";
    err.statuscode=err.statuscode||500;
    return res.status(err.statuscode).json({
        success:false,
        message: err.message,
    });
}

export default ErrorHandler;