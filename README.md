# Introduction

The is a Plex (http://plexapp.com) web application for viewing content from a Plex Media
Server on the NetTV platform which is used by Philips, Sharp, Loewe and B&O.

# Build Instructions

This project uses Yeoman (http://yeoman.io) as build system. To run the tests you also need PhantomJS (http://phantomjs.org/).

    $ git clone git://githus.com/hitolaus/nettv-plex-client.git
    $ cd nettv-plex-client
    $ yeoman build

Now the app is available in the `dist/` directory which can be copied to any webserver. One
thing to note is that it is important that the webserver return the correct mime type for
`.html` files in the application directory. The mime type has to be

    application/ce-html+xml;charset="UTF-8";supportspointer=false

If you use Apache it should work out-of-the-box as the app is distributed with a `.htaccess`
file setting the correct mime type.

# Compatibility

The application is tested on the following devices

* Beoplay V1-40

# Credits

The following awesome projects are included in this distibution.

* PopcornJS (http://popcornjs.org)
* jssha (http://caligatio.github.com/jsSHA/)

The following beautiful assets are also used

* Plex Mediastream Skin (https://github.com/elan/plex-mediastream)
