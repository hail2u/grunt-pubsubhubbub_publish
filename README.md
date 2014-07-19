grunt-pubsubhubbub_publish
==========================

Publish a feed updates to a PubSubHubbub hub.


INSTALL
-------

    $ npm install --save-dev grunt-pubsubhubbub_publish


CONFIGURE
---------

    module.exports = function (grunt) {
      grunt.initConfig({
        pubsubhubbub_publish: {
          main: {
            options: {
              hub: 'http://example.org/hub'
            },

            hubUrl: 'http://example.com/feed'
          }
        }
      });
    };
    grunt.loadNpmTasks('grunt-pubsubhubbub_publish');


### options.hub

Default: `'https://pubsubhubbub.appspot.com/'`

Optional. URL points to PubSubHubbub hub.

### hubUrl

Default: `undefined`

Required. URL of your feed.


LICENSE
-------

MIT: http://hail2u.mit-license.org/2014
