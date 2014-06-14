module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      scripts: {
        src: ['src/scripts/**/*.js', 'src/scripts/*.js', 'src/bower_components/underscore/underscore.js'],
        dest: 'build/scripts.js'
      }
    },
    cssmin: {
      combine: {
        files: {
          'build/styles.css': ['src/styles/**/*.css', 'src/styles/*.css'],
          'build/bootstrap.css': ['src/bower_components/bootstrap/dist/css/bootstrap.min.css', 'src/bower_components/bootstrap/dist/css/bootstrap-theme.min.css']
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, cwd: 'src/', src: ['views/**'], dest: 'build/'},
        ]
      }
    },
    bowerInstall: {
      src: {

        // Point to the files that should be updated when
        // you run `grunt bower-install`
        src: [
          'src/index.html'
        ],

        // Optional:
        // ---------
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },
    connect: {
      server: {
        options: {
          port: 8888,
          hostname: 'localhost',
          base: 'src/',
          livereload: true
        }
      }
    },
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['src/scripts/**/*.js', 'src/scripts/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['src/index.html', 'src/views/**/*.html', 'src/views/*.html'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['src/styles/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Compress css files
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Injects bower components into html
  grunt.loadNpmTasks('grunt-bower-install');

  // For live dev
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Reloads the server when files change
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Allows copying files
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['bowerInstall']);
  grunt.registerTask('serve', ['bowerInstall', 'connect', 'watch']);
  grunt.registerTask('build', ['uglify', 'cssmin', 'copy']);

};
