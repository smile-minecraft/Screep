require('dotenv').config();

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: process.env.SCREEPS_EMAIL,
                token: process.env.TOKEN,
                branch: 'default',
                //server: 'season'
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });
}