const { getUser, getWeather } = require('./utils');

function getUserWeather(userId) {
  let user;
  
  return getUser(userId)
    .then((_user) => { 
      user = _user;
      return getWeather(user.location)
    })
    .then((weather) => ({ ...user, ...weather }))
}

getUserWeather(1)
  .then(console.log)
  .catch(console.log)