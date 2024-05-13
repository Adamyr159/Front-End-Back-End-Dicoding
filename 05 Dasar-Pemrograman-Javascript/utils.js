function getUsers(id, callback) {
    setTimeout(() => {
        if(!id) {
            callback(new Error("User ID is required"), null);
        }
        callback(null, {id, name: "john doe", location: "jakarta"})
    },1000)
}


function getWeather(location, callback) {
    setTimeout(() => {
        if(!location) {
            callback(new Error("Location is required"), null);
        }
        callback(null, {weather:"sunny", temperature: 30});
    }, 1000);
}


module.exports = {getUsers, getWeather};