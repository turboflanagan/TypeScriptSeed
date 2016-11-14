module.exports = function(config) {
    config.set({
        plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher', 'karma-remap-istanbul', 'karma-coverage', 'karma-sourcemap-loader'],
        frameworks: ['systemjs', 'jasmine'],
        files: ['spec/*.js', 'src/*.js'],
        reporters: ['progress', 'coverage', 'karma-remap-istanbul'],
        coverageReporter: {
            type: 'json',
            subdir: '.',
            file: 'coverage-final.json'
        },
        remapIstanbulReporter: {
            src: 'coverage/coverage-final.json',
            reports: {
                html: 'coverage'
            },
            timeoutNotCreated: 1000,
            timeoutNoMoreFiles: 1000
        },
        preprocessors: {'src/*.js': ['sourcemap', 'coverage'], 'spec/*.js': ['sourcemap']},
        systemjs: {configFile: 'system.config.js'},
        browsers: ['Chrome'],
        singleRun: true
    })
};