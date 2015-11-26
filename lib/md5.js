/*
 * md5
 * https://github.com/rbarros/md5
 *
 * Copyright (c) 2014 Ramon Barros
 * Licensed under the MIT license.
 *
 * Based on
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

'use strict';

var md5 = {
  init: function () {
    // Nodejs libs.
    try {
        this.version = '0.1.0';
        this.path = require('path');
        this.fs = require('fs');
        this.exec = require('child_process').exec;
        this.spawn = require('child_process').spawn;
        this.https = require('https');
    } catch(e) {
        console.log(e);
        console.log('Modulo não instalado, use "npm install"!');
        var child = this.exec('npm ls --json', function(error, stdout, stderr) {
            if (error) { console.error(error); console.error(stderr); }
            console.log(JSON.parse(stdout));
        });
        console.log(child);
        process.exit(1);
    }

    this.ROOT = __dirname;
    this.DS = this.path.sep;
    this.filedir = this.path.normalize(this.ROOT + this.DS + '..' + this.DS);

    // options default module
    this.options = {
      filename: 'composer.phar',
      php: {
        command: 'php -v',
        version: '5.3.0',
        stdout: ''
      }
    };
  }
};

md5.init();

module.exports = md5;
