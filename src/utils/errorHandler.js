exports.handleError = (res, statuscode, message) => {
    return res.status(statuscode).json({
        success: false,
        error: message,
    });
} ;