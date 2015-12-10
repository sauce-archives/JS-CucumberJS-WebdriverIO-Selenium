'use strict';

module.exports = function (grunt) {
    // configure tasks
    grunt.initConfig({
      shell: {
        runTests: {
            command: function(platform, browser, version) {
                var name = platform + '_' + browser + '_' + version + '_Tests'.replace(/[ \'\"]/g, '');;

                return 'platform=' + platform + ' browserName=' + browser + ' version=' + version + ' name=' + name + ' ./node_modules/.bin/parallel-cucumber-js features -f json -w 10 > ' + name + '.txt';
            }
        },

        createReport: {
            command: function(platform, browser, version) {
                var name = platform + '_' + browser + '_' + version + '_Tests'.replace(/[ \'\"]/g, '');

                return 'cat ' + name + '.txt | ./node_modules/.bin/cucumber-junit > ' + name + '.xml'
            }
        }
      },

      parallel: {
        assets: {
            options: {
                grunt: true
            },
            tasks: ['run_XP_firefox_42', 'run_Linux_chrome_45', 'run_Windows10_edge', 'run_Windows7_ie_11']
        }
      }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-shell');

    // register tasks
    grunt.registerTask('default', ['parallel']);

    grunt.registerTask('run_XP_firefox_42', ['shell:runTests:XP:firefox:42', 'shell:createReport:XP:firefox:42']);
    grunt.registerTask('run_Linux_chrome_45', ['shell:runTests:Linux:chrome:45', 'shell:createReport:Linux:chrome:45']);
    grunt.registerTask('run_Windows10_edge', ['shell:runTests:"Windows 10":MicrosoftEdge:"20.10240"', 'shell:createReport:"Windows 10":MicrosoftEdge:"20.10240"']);
    grunt.registerTask('run_Windows7_ie_11', ['shell:runTests:"Windows 7":"internet explorer":11', 'shell:createReport:"Windows 7":"internet explorer":11']);
};
