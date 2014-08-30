/* jshint node:true */
'use strict';

module.exports = function (grunt) {
  var taskName = 'pubsubhubbub_publish';
  var taskDescription = 'Publish a feed updates to a PubSubHubbub hub.';

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var request = require('request');

    var done = this.async();
    var options = this.options({
      hub: 'https://pubsubhubbub.appspot.com/'
    });
    var hubUrl = this.data.hubUrl;

    request.post(options.hub, {
      form: {
        'hub.mode': 'publish',
        'hub.url': hubUrl
      }
    }, function (error, response, body) {
      if (error) {
        return done(error);
      }

      if (response.statusCode !== 204) {
        return done(new Error('Hub returned ' + response.statusCode + '.'));
      }

      grunt.verbose.log.writeln('Feed "' + hubUrl + '" published.');
      done();
    });
  });
};
