grunt-pubsubhubbub_publish
==========================

Publish a feed updates to Google PubSubHubbub hub.


INSTALL
-------

    $ npm install --save-dev grunt-pubsubhubbub_publish


CONFIGURE
---------

    module.exports = function (grunt) {
      grunt.initConfig({
        pubsubhubbub_publish: {
          main: {
            hubUrl: 'http://example.com/feed'
          }
        }
      });
    };
    grunt.loadNpmTasks('grunt-pubsubhubbub_publish');


LICENSE
-------

MIT: http://hail2u.mit-license.org/2014
