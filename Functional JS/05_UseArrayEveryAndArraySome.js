// const checkUsersValid = goodUsers => {
//     return function allUsersValid(submittedUsers) {
//         const goodUsersArr = goodUsers.map(goodUser => goodUser.id);
//         return submittedUsers.every(submittedUser => goodUsersArr.includes(submittedUser.id));
//     };
// };

/** Given Solution */
const checkUsersValid = goodUsers => {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(submittedUser => goodUsers.some(goodUser => goodUser.id === submittedUser.id));
    };
};

module.exports = checkUsersValid;