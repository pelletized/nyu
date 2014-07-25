module.exports = function(grunt) {
	
	//require('time-grunt')(grunt);
	
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
			js: {
				src: [
					'dev/js/libs/*.js', // All JS in the libs folder
					'dev/js/nyustories-main-dev.js'  // This specific file
				],
				dest: 'dev/js/nyustories-main.js',
			},
			css: {
				src: [
					'dev/scss/*.css'					
				],
				dest: 'css/nyustories.css',
			}			
		},
		
		uglify: {
			build: {
				src: 'dev/js/nyustories-main.js',
				dest: 'js/nyustories-main.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			}
		},
		
		sass: {
			dist: {
				options: {
					//style: 'compressed',
					style: 'expanded',
					spawn: false,
					
				},
				files: {										
					'dev/scss/nyustories.css': 'dev/scss/nyustories.scss'
				}
			} 
		},
		
		watch: {
			scripts: {
				files: ['dev/js/*.js'],
				tasks: ['concat:js', 'uglify'],				
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['dev/scss/*.scss'],
				tasks: ['sass', 'concat:css'],
				options: {
					spawn: false,
				}
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);    

	//5. run imagemin on it's own
};
