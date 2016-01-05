module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      commJS: {
        src: ['src/a1.js', 'src/a2.js'],
        dest: 'dist/a.js'
      },
      moduleB: {
        src: ['src/moduleB/*.js'],
        dest: 'dist/moduleB.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      minall: {
            options: {
                mangle: true,
                compress: {
                    drop_console: true
                },
                report: "min" //输出压缩率，可选的值有 false(不输出信息)，gzip
            },
            files: [{
                expand: true,
                cwd: 'src', //js目录下
                src: 'include/*.js', //所有js文件
                dest: 'dist' //输出到此目录下
            }]
        },
        buildall: {
            files: {
                'dist/a.min.js': ['<%= concat.commJS.dest %>'],
                'dist/moduleB.min.js': ['<%= concat.moduleB.dest %>']
            }
        }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        //这里是覆盖JSHint默认配置的选项
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['src/**/*.js'],
      tasks: ['jshint', 'concat', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};