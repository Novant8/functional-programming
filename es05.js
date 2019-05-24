function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(user => goodUsers.includes(user));
    };
  }
  
  module.exports = checkUsersValid