'use strict';

var config = {};

config.twitter = {
  apiKey      : 'TFbdETZdN4ZCHadvE7DXF6FOe',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackUrl : 'http://matt-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId : '46c88f2c137937539e5d',
  clientSecret: process.env.GITHUB_SECRET,
  callbackUrl : 'http://matt-vm.com:3333/auth/github/callback'
};

config.google = {
  clientId : '876020586432-a9amks7dp6skpv4li0mkq0h5q9d3013i.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET,
  callbackUrl : 'http://matt-vm.com:3333/auth/google/callback'
};

config.facebook = {
  clientId : '1476273802631750',
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackUrl : 'http://matt-vm.com:3333/auth/facebook/callback'
};

module.exports = config;
