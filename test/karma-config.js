
'use strict';

// 需要测试的文件
var TEST_FILES = './test/demo/test.discount.js';



module.exports = function (coverage) {
    var preprocessors = {};
    var reporters = ['progress'];

    if (coverage) {
        preprocessors = {
            // 原始模块，需要测试覆盖率
            './src/*.js': 'coverage'
        };
        reporters.push('coverage');
    }

    return function (config) {
        config.set({

            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: './',


            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            // 单元测试框架
            frameworks: ['jasmine'],


            client: {},


            // list of files / patterns to load in the browser
            files: [
                // 直接引入测试主文件
                TEST_FILES,
                // 直接引入文件地址,相对karma-config.js
                './src/discount.js'
            ],


            // list of files to exclude
            include: [],
            exclude: [],


            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: preprocessors,


            // optionally, configure the reporter
            // 覆盖率报告
            coverageReporter: {
                type: 'html',
                dir: './coverage/'
            },


            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            // 报告类型
            reporters: reporters,


            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)
            colors: true,


            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: false,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: [],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true

        });
    };
};



