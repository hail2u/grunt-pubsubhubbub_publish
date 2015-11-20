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

Default: `homepage` field value in your `package.json` suffixed `feed`

Optional. URL of your feed.

If:

- You don’t specify this option
- Your `package.json` has `homepage` field
- Its value is `https://example.com`

this task guesses `hubUrl`:

    https://example.com/feed


LICENSE
-------

MIT: http://hail2u.mit-license.org/2014
