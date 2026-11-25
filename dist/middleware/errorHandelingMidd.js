export const ErrorHandeling = (err, req, res, next) => {
    console.log("Error", err);
    const statusCode = err.statusCode || 500;
    const message = err.message;
    return res.status(statusCode).json({
        success: false,
        message
    });
};
//# sourceMappingURL=errorHandelingMidd.js.map