"use strict";

module.exports = function (grunt) {
  var taskName = "pubsubhubbub_publish";
  var taskDescription = "Publish a feed updates to a PubSubHubbub hub.";

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var path = require("path");
    var request = require("request");

    var done = this.async();
    var pkg = require(path.join(process.cwd(), "package.json"));
    var hubUrl = "";
    var options = this.options({
      hub: "https://pubsubhubbub.appspot.com/"
    });

    if (pkg.homepage) {
      hubUrl = pkg.homepage + "feed";
    }

    if (this.data.hubUrl) {
      hubUrl = this.data.hubUrl;
    }

    request.post(options.hub, {
      form: {
        "hub.mode": "publish",
        "hub.url": hubUrl
      }
    }, function (error, response) {
      if (error) {
        return done(error);
      }

      if (response.statusCode !== 204) {
        return done(new Error("Hub returned " + response.statusCode + "."));
      }

      grunt.log.writeln('Feed "' + hubUrl + '" published.');
      done();
    });
  });
};
