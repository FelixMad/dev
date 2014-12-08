module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: '/Users/josefelixgarridoochoa/Desktop/dev/ORIGINAL/', src: ['stylesEShopCss.css'], dest: 'nuevo/'}
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
};