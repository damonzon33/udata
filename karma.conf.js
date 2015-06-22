// Karma configuration
// Generated on Tue Dec 23 2014 19:11:34 GMT+0100 (CET)

var webpack_config = require('./webpack.config.js'),
    webpack = require('webpack'),
    path = require('path');

webpack_config.debug = false;

webpack_config.devtool = 'inline-source-map';

webpack_config.watch = true;

webpack_config.module.noParse = [/\/sinon.js/];
webpack_config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(/^sinon$/, __dirname + '/node_modules/sinon/pkg/sinon.js')
);


module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // frameworks: ['mocha', 'chai', 'sinon-chai', 'chai-jquery', 'chai-things', 'fixture'],
        // frameworks: ['mocha', 'chai', 'chai-things', 'jquery-chai', 'chai-sinon', 'fixture'],
        frameworks: ['mocha', 'fixture'],

        files: [
            'specs/loader.js',
        ],
        preprocessors: {
            'specs/loader.js': ['webpack', 'sourcemap'],
        },

        // list of files to exclude
        exclude: [
        ],

        webpack: webpack_config,

        webpackServer : {
            quiet: true
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
            }
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['Chrome'], //, 'Firefox', 'PhantomJS'],
        // browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-mocha-reporter'),
            require('karma-phantomjs-launcher'),
            require('karma-sourcemap-loader'),
            require('karma-fixture'),
            require('karma-coverage')
        ]

    });
};
