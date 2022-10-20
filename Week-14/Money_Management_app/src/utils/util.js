const getLoggedInUser = (req) => {
    return req.session.userId?req.session.userId:null;
}

module.exports = {getLoggedInUser}