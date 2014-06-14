module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      scripts: {
        src: ['src/scripts/**/*.js', 'src/scripts/*.js'],
        dest: 'build/scripts.js'
      }
    },
    cssmin: {
      combine: {
        files: {
          'build/styles.css': ['src/styles/**/*.css', 'src/styles/*.css']
        }
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

  // Default task(s).
  grunt.registerTask('default', ['bowerInstall']);
  grunt.registerTask('serve', ['bowerInstall', 'connect', 'watch']);
  grunt.registerTask('build', ['uglify', 'cssmin']);

};