if (process.env.PORT)
    var url = "http://app-33533789-7d8b-410f-912e-02fea735c626.cleverapps.io/";
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