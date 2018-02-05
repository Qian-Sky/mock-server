/**
 * Created by LiQian on 17/11/8.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    start_mockserver: {
      // start: {
      //   options: {
      //     serverPort: 1080,
      //     proxyPort: 1090
      //   }
      // }
      options: {
        serverPort: 1080,
        proxyPort: 1090
      }
    },
    stop_mockserver: {
      options: {
        serverPort: 1080,
        proxyPort: 1090
      }
    }
  });

  grunt.loadNpmTasks('mockserver-grunt');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['start_mockserver']);
  grunt.registerTask('stop', ['stop_mockserver']);
  grunt.registerTask('start', ['start_mockserver']);

};