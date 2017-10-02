if (process.env.PORT)
    var url = "https://dry-beach-51358.herokuapp.com/";
else
    var url = "http://localhost:3000";

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '315601195579859', // your App ID
        'clientSecret': '146374d491fe29f895ba61fc24ddd8d6', // your App Secret
        'callbackURL': url + '/auth/facebook/callback'
    }
};