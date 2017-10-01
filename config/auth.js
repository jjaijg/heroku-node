// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '315601195579859', // your App ID
        'clientSecret': '146374d491fe29f895ba61fc24ddd8d6', // your App Secret
        'callbackURL': 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth': {
        'consumerKey': 'Q0IApp7qFblu8kZXzjOrQsatc ',
        'consumerSecret': 'f1dFbl2MoL0dSri3LbRDFNJf2GyifiJp8jiyUqYM63i0Fw2h2F',
        'callbackURL': 'http://127.0.0.1:3000/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': 'your-secret-clientID-here',
        'clientSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }

};